# PolarDB Supabase MCP

PolarDB Supabase MCP，提供完整的数据库管理、Edge Functions 和存储功能。

## 🚀 功能特性

### ✅ PolarDB 模式支持的功能

#### 数据库操作
- `list_tables` - 列出数据库中的所有表
- `execute_sql` - 执行 SQL 查询（支持只读模式）

#### 项目信息
- `get_anon_key` - 获取项目的匿名密钥
- `get_project_url` - 获取项目 URL

#### 最佳实践
- `get_best_practices` - 获取 Supabase 开发最佳实践和提示词

#### 存储管理
- `list_storage_buckets` - 列出所有存储桶

#### Edge Functions 管理
- `list_edge_functions` - 列出所有 Edge Functions
- `get_edge_function` - 获取特定 Edge Function 详情
- `deploy_edge_function` - 部署 Edge Function

#### Edge Functions Secrets 管理
- `list_ef_secrets` - 列出所有 Edge Function secrets（加密值）。
- `create_ef_secrets` - 创建或更新 Edge Function secrets（支持批量，值加密存储）。
- `delete_ef_secrets` - 删除 Edge Function secrets（支持批量删除）。

**认证方式**: Edge Functions 和 Secrets 管理支持两种认证方式：
1. **Dashboard 认证**（优先）：使用 Dashboard 用户名和密码（Basic Auth）
2. **Service Role Key 认证**（备选）：如果未配置 Dashboard 认证，将使用 Service Role Key（Bearer Auth）

### 🎯 Supabase 官方 AI Prompts 集成

本 MCP 服务器还集成了 Supabase 官方的 AI 提示词，通过 MCP 资源协议自动提供：

#### 可用的提示词资源
- **Next.js 认证设置** - Bootstrap Next.js app with Supabase Auth
- **Edge Functions 开发** - Writing Supabase Edge Functions  
- **数据库模式设计** - Database: Declarative Database Schema
- **RLS 策略创建** - Database: Create RLS policies
- **数据库函数开发** - Database: Create functions
- **数据库迁移管理** - Database: Create migration
- **PostgreSQL 风格指南** - Postgres SQL Style Guide
- **前端开发最佳实践** - Frontend Application Development Best Practices

## 🔧 配置方式

### 1. 快速开始

#### 环境准备

确保你的环境满足以下要求：

```bash
# Node.js 版本要求
node --version  # 需要 >= 18.x

# 包管理器
npm install -g pnpm  # 推荐使用 pnpm
```

#### 安装和构建

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
pnpm install

# 构建项目
pnpm build
```

### 2. MCP 服务器配置

#### Cursor 配置

创建或编辑 Cursor 的 MCP 配置文件：

##### 方式一：使用 npx（推荐 - 无需本地编译）

```json
{
  "mcpServers": {
    "polardb-supabase": {
      "command": "npx",
      "args": [
        "-y",
        "polardb-supabase-mcp",
        "--api-url", "http://your-polardb-supabase-ip:port",
        "--service-role-key", "your-service-role-key",
        "--anon-key", "your-anon-key",
        "--project-ref", "your-project-id",
        "--dashboard-username", "your-dashboard-username",
        "--dashboard-password", "your-dashboard-password",
        "--read-only"
      ]
    }
  }
}
```

##### 方式二：使用本地编译

```json
{
  "mcpServers": {
    "polardb-supabase": {
      "command": "node",
      "args": [
        "/path/to/supabase-mcp/packages/mcp-server-supabase/dist/transports/stdio.js",
        "--api-url", "http://your-polardb-supabase-ip:port",
        "--service-role-key", "your-service-role-key",
        "--anon-key", "your-anon-key",
        "--project-ref", "your-project-id",
        "--dashboard-username", "your-dashboard-username",
        "--dashboard-password", "your-dashboard-password",
        "--read-only"
      ]
    }
  }
}
```

### 3. 配置参数说明

#### PolarDB 模式参数

| 参数 | 环境变量 | 说明 | 必需 |
|------|----------|------|------|
| `--api-url` | `SUPABASE_API_URL` | Supabase 项目 API URL | ✅ |
| `--service-role-key` | `SUPABASE_SERVICE_ROLE_KEY` | Supabase 服务角色密钥（数据库操作必需，也可用于 Edge Functions 认证） | ✅ |
| `--anon-key` | `SUPABASE_ANON_KEY` | Supabase 匿名密钥 | ❌ |
| `--dashboard-username` | `SUPABASE_DASHBOARD_USERNAME` | Supabase Dashboard 用户名（Edge Functions 优先认证方式） | ❌ |
| `--dashboard-password` | `SUPABASE_DASHBOARD_PASSWORD` | Supabase Dashboard 密码（Edge Functions 优先认证方式） | ❌ |
| `--read-only` | - | 只读模式，防止写操作 | ❌ |



### 4. 获取配置信息

#### 从 PolarDB Supabase 实例详情页获取

1. **API URL**: 详情页 → 拓扑图 → 公网地址
2. **Service Role Key**: 详情页 → 配置 → secret.jwt.serviceKey
3. **Anon Key**: 详情页 → 配置 → secret.jwt.anonKey
5. **Dashboard 用户名**: 详情页 → 配置 → secret.dashboard.username
6. **Dashboard 密码**: 详情页 → 配置 → secret.dashboard.password



### 5. 故障排除

#### 配置错误

```bash
# 错误: 缺少必需配置
❌ 配置验证失败: 缺少必需配置: apiUrl, serviceRoleKey

# 解决: 检查配置
1. 确认 apiUrl 和 serviceRoleKey 已设置
2. 确认配置文件格式正确
```

#### 网络连接错误

```bash
# 错误: 网络连接失败
❌ execute_sql 失败: fetch failed

# 解决: 检查网络
1. 确认 API URL 可访问
2. 检查防火墙设置
3. 验证网络连接
```

#### 认证错误

```bash
# 错误: 认证失败
❌ list_edge_functions 失败: 401 Unauthorized

# 解决: 检查认证
1. 确认 serviceRoleKey 正确
2. 检查 Dashboard 用户名密码
3. 验证权限设置
```

