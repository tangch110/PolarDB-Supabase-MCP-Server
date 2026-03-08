import { z } from 'zod';
import { edgeFunctionExample } from '../edge-function.js';
import type { SupabasePlatform } from '../platform/types.js';
import { injectableTool } from './util.js';

export type EdgeFunctionToolsOptions = {
  platform: SupabasePlatform;
  projectId?: string;
};

export function getEdgeFunctionTools({
  platform,
  projectId,
}: EdgeFunctionToolsOptions) {
  const project_id = projectId;

  return {
    list_edge_functions: injectableTool({
      description: 'Lists all Edge Functions in a Supabase project.',
      parameters: z.object({
        project_id: z.string(),
      }),
      inject: { project_id },
      execute: async ({ project_id }) => {
        return await platform.listEdgeFunctions(project_id);
      },
    }),
    deploy_edge_function: injectableTool({
      description: `Deploys an Edge Function to a Supabase project. If the function already exists, this will create a new version. Example:\n\n${edgeFunctionExample}`,
      parameters: z.object({
        project_id: z.string(),
        name: z.string().describe('The name of the function'),
        entrypoint_path: z
          .string()
          .default('index.ts')
          .describe('The entrypoint of the function'),
        import_map_path: z
          .string()
          .describe('The import map for the function.')
          .optional(),
        files: z
          .array(
            z.object({
              name: z.string(),
              content: z.string().optional(),
              file_path: z.string().optional().describe('Local file path, alternative to content'),
            })
          )
          .describe(
            'The files to upload. This should include the entrypoint and any relative dependencies. Each file must have either content (string) or file_path (local path).'
          ),
        verify_jwt: z
          .boolean()
          .optional()
          .describe('Whether to enable JWT verification for this function'),
      }),
      inject: { project_id },
      execute: async ({
        project_id,
        name,
        entrypoint_path,
        import_map_path,
        files,
        verify_jwt,
      }) => {
        // 读取本地文件内容
        const processedFiles = await Promise.all(
          files.map(async (file) => {
            if (file.content) {
              return { name: file.name, content: file.content };
            } else if (file.file_path) {
              try {
                const content = await Deno.readTextFile(file.file_path);
                return { name: file.name, content };
              } catch (error) {
                throw new Error(`Failed to read file ${file.file_path}: ${error instanceof Error ? error.message : String(error)}`);
              }
            } else {
              throw new Error(`File ${file.name} must have either content or file_path`);
            }
          })
        );

        return await platform.deployEdgeFunction(project_id, {
          name,
          entrypoint_path,
          import_map_path,
          files: processedFiles,
          verify_jwt,
        });
      },
    }),
    list_edge_function_secrets: injectableTool({
      description: 'Lists all Edge Function secrets in a Supabase project.',
      parameters: z.object({
        project_id: z.string(),
      }),
      inject: { project_id },
      execute: async ({ project_id }) => {
        return await platform.listSecrets(project_id);
      },
    }),
    create_edge_function_secrets: injectableTool({
      description: 'Creates or updates Edge Function secrets in a Supabase project. Secrets are encrypted and stored securely.',
      parameters: z.object({
        project_id: z.string(),
        secrets: z.array(
          z.object({
            name: z.string().describe('The name of the secret'),
            value: z.string().describe('The value of the secret (will be encrypted)'),
          })
        ).describe('Array of secrets to create or update'),
      }),
      inject: { project_id },
      execute: async ({ project_id, secrets }) => {
        return await platform.createSecrets(project_id, secrets);
      },
    }),
    delete_edge_function_secrets: injectableTool({
      description: 'Deletes Edge Function secrets from a Supabase project.',
      parameters: z.object({
        project_id: z.string(),
        secret_names: z.array(z.string()).describe('Array of secret names to delete'),
      }),
      inject: { project_id },
      execute: async ({ project_id, secret_names }) => {
        await platform.deleteSecrets(project_id, secret_names);
        return { success: true, message: 'Secrets deleted successfully' };
      },
    }),
    update_edge_function: injectableTool({
      description: 'Updates an existing Edge Function configuration (e.g., enable/disable JWT verification).',
      parameters: z.object({
        project_id: z.string(),
        function_slug: z.string().describe('The slug of the function to update'),
        verify_jwt: z
          .boolean()
          .optional()
          .describe('Whether to enable JWT verification for this function'),
      }),
      inject: { project_id },
      execute: async ({ project_id, function_slug, verify_jwt }) => {
        if (verify_jwt === undefined) {
          throw new Error('At least one field to update must be provided (e.g., verify_jwt)');
        }
        return await platform.updateEdgeFunction(project_id, function_slug, {
          verify_jwt,
        });
      },
    }),
  };
}
