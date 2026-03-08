import { tool } from '@supabase/mcp-utils';
import { readFileSync } from 'fs';
import { z } from 'zod';
import type { SupabasePlatform } from '../platform/types.js';
import { promptsProvider } from '../prompts-loader.js';

export interface PolarDBToolsOptions {
  platform: SupabasePlatform;
  projectId?: string;
  readOnly?: boolean;
}

export function getPolarDBTools({ platform, projectId, readOnly }: PolarDBToolsOptions) {
  return {
    list_tables: tool({
      description: "List all tables in the database",
      parameters: z.object({
        schema: z.string().optional().default('public')
      }),
      async execute({ schema }) {
        const query = `
          SELECT 
            table_name,
            table_type,
            table_schema
          FROM information_schema.tables 
          WHERE table_schema = '${schema}'
          ORDER BY table_name
        `;
        
        const result = await platform.executeSql(projectId || 'default', {
          query,
          read_only: true
        });
        
        return result;
      }
    }),

    execute_sql: tool({
      description: "Execute SQL query against the database",
      parameters: z.object({
        query: z.string().describe("SQL query to execute"),
        read_only: z.boolean().optional().default(true).describe("Whether the query is read-only")
      }),
      async execute({ query, read_only }) {
        if (readOnly && !read_only) {
          throw new Error('Server is configured in read-only mode. Cannot execute write operations.');
        }
        
        const finalReadOnly = readOnly ? true : read_only;
        
        const result = await platform.executeSql(projectId || 'default', {
          query,
          read_only: finalReadOnly
        });
        
        return {
          data: result,
          rowCount: Array.isArray(result) ? result.length : 0,
          readOnly: finalReadOnly
        };
      }
    }),

    get_anon_key: tool({
      description: "Get the anonymous key for the project",
      parameters: z.object({}),
      async execute() {
        return await platform.getAnonKey(projectId || 'default');
      }
    }),

    get_project_url: tool({
      description: "Get the project URL",
      parameters: z.object({}),
      async execute() {
        return await platform.getProjectUrl(projectId || 'default');
      }
    }),

    list_storage_buckets: tool({
      description: "List all storage buckets",
      parameters: z.object({}),
      async execute() {
        return await platform.listAllBuckets(projectId || 'default');
      }
    }),

    list_edge_functions: tool({
      description: "List all Edge Functions in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listEdgeFunctions(projectId || 'default');
      }
    }),

    get_edge_function: tool({
      description: "Get a specific Edge Function by slug",
      parameters: z.object({
        slug: z.string().describe("The slug of the Edge Function")
      }),
      async execute({ slug }) {
        return await platform.getEdgeFunction(projectId || 'default', slug);
      }
    }),

    deploy_edge_function: tool({
      description: "Deploy an Edge Function to a Supabase project. If the function already exists, this will create a new version.",
      parameters: z.object({
        name: z.string().describe("The name/slug of the Edge Function"),
        entrypoint_path: z.string().default('index.ts').describe("The entrypoint path for the function"),
        import_map_path: z.string().optional().describe("The import map path (optional)"),
        files: z.array(z.object({
          name: z.string().describe("The filename"),
          content: z.string().optional().describe("The file content (alternative to file_path)"),
          file_path: z.string().optional().describe("Local file path, alternative to content")
        })).describe("Array of files to deploy. Each file must have either content or file_path"),
        verify_jwt: z.boolean().optional().describe("Whether to enable JWT verification for this function")
      }),
      async execute({ name, entrypoint_path, import_map_path, files, verify_jwt }) {
        if (readOnly) {
          throw new Error('Cannot deploy Edge Functions in read-only mode');
        }
        
        // 读取本地文件内容
        const processedFiles = files.map((file) => {
          if (file.content) {
            return { name: file.name, content: file.content };
          } else if (file.file_path) {
            try {
              const content = readFileSync(file.file_path, 'utf-8');
              return { name: file.name, content };
            } catch (error) {
              throw new Error(`Failed to read file ${file.file_path}: ${error instanceof Error ? error.message : String(error)}`);
            }
          } else {
            throw new Error(`File ${file.name} must have either content or file_path`);
          }
        });
        
        return await platform.deployEdgeFunction(projectId || 'default', {
          name,
          entrypoint_path,
          import_map_path,
          files: processedFiles,
          verify_jwt
        });
      }
    }),

    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    list_ef_secrets: tool({
      description: "List all Edge Function secrets in the project",
      parameters: z.object({}),
      async execute() {
        return await platform.listSecrets(projectId || 'default');
      }
    }),

    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    create_ef_secrets: tool({
      description: "Create or update Edge Function secrets. Secrets are encrypted and stored securely.",
      parameters: z.object({
        secrets: z.array(z.object({
          name: z.string().describe("The name of the secret"),
          value: z.string().describe("The value of the secret (will be encrypted)")
        })).describe("Array of secrets to create or update")
      }),
      async execute({ secrets }) {
        if (readOnly) {
          throw new Error('Cannot create secrets in read-only mode');
        }
        
        return await platform.createSecrets(projectId || 'default', secrets);
      }
    }),

    // Short name to keep polardb-supabase_* under 60 chars (Cursor MCP limit)
    delete_ef_secrets: tool({
      description: "Delete Edge Function secrets from the project",
      parameters: z.object({
        secret_names: z.array(z.string()).describe("Array of secret names to delete")
      }),
      async execute({ secret_names }) {
        if (readOnly) {
          throw new Error('Cannot delete secrets in read-only mode');
        }
        
        await platform.deleteSecrets(projectId || 'default', secret_names);
        return { success: true, message: 'Secrets deleted successfully' };
      }
    }),

    update_edge_function: tool({
      description: "Update an existing Edge Function configuration (e.g., enable/disable JWT verification).",
      parameters: z.object({
        function_slug: z.string().describe("The slug of the function to update"),
        verify_jwt: z.boolean().optional().describe("Whether to enable JWT verification for this function")
      }),
      async execute({ function_slug, verify_jwt }) {
        if (readOnly) {
          throw new Error('Cannot update Edge Functions in read-only mode');
        }
        
        if (verify_jwt === undefined) {
          throw new Error('At least one field to update must be provided (e.g., verify_jwt)');
        }
        
        return await platform.updateEdgeFunction(projectId || 'default', function_slug, {
          verify_jwt
        });
      }
    }),

    get_best_practices: tool({
      description: "Get Supabase development best practices and prompts for use in IDE rules configuration",
      parameters: z.object({}),
      async execute() {
        try {
          const prompts = await promptsProvider.getAllPrompts();
          
          // 生成 markdown 内容
          const content = [
            `# Supabase Development Best Practices`,
            ``,
            `> Total practices: ${prompts.length}`,
            ``,
            ...prompts.map(prompt => [
              `## ${prompt.name}`,
              ``,
              prompt.description ? `**${prompt.description}**` : '',
              ``,
              prompt.content,
              ``,
              `---`,
              ``
            ].filter(Boolean).join('\n'))
          ].join('\n');
          
          return {
            content,
            count: prompts.length,
            usage: "Copy the content above and paste it into .cursor/rules or .qoder/rules"
          };
        } catch (error) {
          return {
            error: 'Failed to get best practices',
            message: error instanceof Error ? error.message : String(error)
          };
        }
      }
    }),
  };
}
