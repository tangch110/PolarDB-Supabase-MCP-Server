import * as _supabase_mcp_utils from '@supabase/mcp-utils';
import { z } from 'zod';
import { S as SupabasePlatform } from '../types-6YVDhwu7.cjs';

interface PolarDBToolsOptions {
    platform: SupabasePlatform;
    projectId?: string;
    readOnly?: boolean;
}
declare function getPolarDBTools({ platform, projectId, readOnly }: PolarDBToolsOptions): {
    list_tables: _supabase_mcp_utils.Tool<z.ZodObject<{
        schema: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        schema: string;
    }, {
        schema?: string | undefined;
    }>, unknown[]>;
    execute_sql: _supabase_mcp_utils.Tool<z.ZodObject<{
        query: z.ZodString;
        read_only: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        query: string;
        read_only: boolean;
    }, {
        query: string;
        read_only?: boolean | undefined;
    }>, {
        data: unknown[];
        rowCount: number;
        readOnly: boolean;
    }>;
    get_anon_key: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, string>;
    get_project_url: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, string>;
    list_storage_buckets: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        public: boolean;
        name: string;
        id: string;
        owner: string;
        created_at: string;
        updated_at: string;
    }[]>;
    list_edge_functions: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }[]>;
    get_edge_function: _supabase_mcp_utils.Tool<z.ZodObject<{
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        slug: string;
    }, {
        slug: string;
    }>, {
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }>;
    deploy_edge_function: _supabase_mcp_utils.Tool<z.ZodObject<{
        name: z.ZodString;
        entrypoint_path: z.ZodDefault<z.ZodString>;
        import_map_path: z.ZodOptional<z.ZodString>;
        files: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            content: z.ZodOptional<z.ZodString>;
            file_path: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            content?: string | undefined;
            file_path?: string | undefined;
        }, {
            name: string;
            content?: string | undefined;
            file_path?: string | undefined;
        }>, "many">;
        verify_jwt: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        entrypoint_path: string;
        files: {
            name: string;
            content?: string | undefined;
            file_path?: string | undefined;
        }[];
        verify_jwt?: boolean | undefined;
        import_map_path?: string | undefined;
    }, {
        name: string;
        files: {
            name: string;
            content?: string | undefined;
            file_path?: string | undefined;
        }[];
        verify_jwt?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }>, Omit<{
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }, "files">>;
    list_ef_secrets: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        name: string;
        value: string;
        updated_at: string | null;
    }[]>;
    create_ef_secrets: _supabase_mcp_utils.Tool<z.ZodObject<{
        secrets: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            value: string;
        }, {
            name: string;
            value: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        secrets: {
            name: string;
            value: string;
        }[];
    }, {
        secrets: {
            name: string;
            value: string;
        }[];
    }>, {
        name: string;
        value: string;
        updated_at: string | null;
    }[]>;
    delete_ef_secrets: _supabase_mcp_utils.Tool<z.ZodObject<{
        secret_names: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        secret_names: string[];
    }, {
        secret_names: string[];
    }>, {
        success: boolean;
        message: string;
    }>;
    update_edge_function: _supabase_mcp_utils.Tool<z.ZodObject<{
        function_slug: z.ZodString;
        verify_jwt: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        function_slug: string;
        verify_jwt?: boolean | undefined;
    }, {
        function_slug: string;
        verify_jwt?: boolean | undefined;
    }>, Omit<{
        name: string;
        status: string;
        id: string;
        slug: string;
        version: number;
        files: {
            name: string;
            content: string;
        }[];
        created_at?: number | undefined;
        updated_at?: number | undefined;
        verify_jwt?: boolean | undefined;
        import_map?: boolean | undefined;
        import_map_path?: string | undefined;
        entrypoint_path?: string | undefined;
    }, "files">>;
    get_best_practices: _supabase_mcp_utils.Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, {
        content: string;
        count: number;
        usage: string;
        error?: undefined;
        message?: undefined;
    } | {
        error: string;
        message: string;
        content?: undefined;
        count?: undefined;
        usage?: undefined;
    }>;
};

export { type PolarDBToolsOptions, getPolarDBTools };
