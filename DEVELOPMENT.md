# DullChat 开发指南

## 快速开始

### 1. 安装依赖

首先安装项目所需的所有依赖：

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run electron:dev
```

这将启动 Vite 开发服务器和 Electron 应用。

## 项目已完成的部分

### ✅ 第一阶段：项目初始化与基础架构

1. **项目配置**
   - ✅ package.json（包含所有必要的依赖）
   - ✅ tsconfig.json（TypeScript 配置）
   - ✅ vite.config.ts（Vite + Electron 集成配置）
   - ✅ .gitignore

2. **Electron 基础**
   - ✅ electron/main.ts（主进程，窗口管理）
   - ✅ electron/preload.ts（预加载脚本，IPC 通信接口）

3. **Vue 前端基础**
   - ✅ src/main.ts（Vue 应用入口）
   - ✅ src/App.vue（根组件）
   - ✅ src/router/index.ts（路由配置）
   - ✅ src/stores/theme.ts（主题状态管理）

4. **样式系统**
   - ✅ src/assets/styles/variables.scss（主题变量）
   - ✅ src/assets/styles/global.scss（全局样式）
   - ✅ 亮色/暗色主题支持

5. **页面视图**
   - ✅ src/views/Chat.vue（主聊天页面，带基础布局）
   - ✅ src/views/Settings.vue（设置页面占位）
   - ✅ src/views/PromptLibrary.vue（Prompt 库页面占位）

6. **类型定义**
   - ✅ src/types/index.ts（核心类型定义）

## 下一步开发计划

### 第二阶段：数据层实现

需要实现：
1. 数据库设计和 SQLite 集成
2. IPC 数据库操作处理
3. 前端数据服务封装

### 第三阶段：AI 服务层

需要实现：
1. AI 服务基类和工厂模式
2. OpenAI、Claude、本地模型集成
3. 流式响应处理

### 第四阶段：核心 UI 组件

需要实现：
1. 完善的聊天组件（消息列表、输入框）
2. Markdown 渲染和代码高亮
3. 侧边栏会话管理组件

## 目录结构

```
DullChat/
├── electron/                    # Electron 主进程
│   ├── main.ts                 # ✅ 主进程入口
│   └── preload.ts              # ✅ 预加载脚本
├── src/                        # Vue 前端代码
│   ├── main.ts                 # ✅ Vue 入口
│   ├── App.vue                 # ✅ 根组件
│   ├── assets/                 # 静态资源
│   │   └── styles/             # ✅ 全局样式
│   ├── components/             # 组件（待开发）
│   ├── views/                  # ✅ 页面视图
│   ├── stores/                 # ✅ 状态管理
│   ├── services/               # 业务服务（待开发）
│   ├── plugins/                # 插件系统（待开发）
│   ├── types/                  # ✅ 类型定义
│   └── router/                 # ✅ 路由配置
├── public/                     # 公共资源
├── package.json                # ✅ 项目配置
├── vite.config.ts              # ✅ Vite 配置
├── tsconfig.json               # ✅ TypeScript 配置
└── README.md                   # ✅ 项目说明
```

## 开发注意事项

1. **Electron 开发**
   - 主进程代码在 `electron/` 目录
   - 使用 IPC 进行主进程和渲染进程通信
   - 数据库操作必须在主进程中进行

2. **Vue 开发**
   - 使用 Composition API
   - 使用 TypeScript 进行类型检查
   - 使用 Pinia 进行状态管理

3. **样式开发**
   - 使用 SCSS
   - 使用 CSS 变量实现主题切换
   - 遵循 Arco Design 的设计规范

4. **代码规范**
   - 使用 ESLint 进行代码检查
   - 使用 Prettier 进行代码格式化

## 常用命令

```bash
# 安装依赖
npm install

# 开发模式
npm run electron:dev

# 构建应用
npm run electron:build

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 技术栈

- **Electron**: ^28.0.0
- **Vue**: ^3.4.0
- **Vite**: ^5.0.0
- **TypeScript**: ^5.3.0
- **Arco Design**: ^2.55.0
- **Pinia**: ^2.1.0
- **Vue Router**: ^4.2.0

## 参考资源

- [Electron 文档](https://www.electronjs.org/docs)
- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [Arco Design Vue 文档](https://arco.design/vue)
- [Pinia 文档](https://pinia.vuejs.org/)
