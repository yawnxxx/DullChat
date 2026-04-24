# DullChat

一个现代化的 AI 聊天桌面应用，基于 Electron + Vue 3 + TypeScript 构建。

## 特性

- 🤖 多 AI 模型支持（OpenAI、Claude、本地模型等）
- 💬 完善的会话管理（多会话、历史记录、导入导出）
- 📝 Prompt 模板库
- 🎨 精美的界面设计（类似网易云音乐风格）
- 🌓 主题切换（亮色/暗色/自定义）
- ⌨️ 丰富的快捷键支持
- 🔌 可扩展的插件系统
- 💾 本地数据存储（SQLite）

## 技术栈

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **桌面框架**: Electron
- **UI 组件库**: Arco Design
- **状态管理**: Pinia
- **路由**: Vue Router
- **数据库**: SQLite (better-sqlite3)
- **Markdown**: marked + highlight.js

## 开发

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run electron:dev
```

### 构建

```bash
npm run electron:build
```

## 项目结构

```
DullChat/
├── electron/          # Electron 主进程
├── src/              # Vue 前端代码
│   ├── assets/       # 静态资源
│   ├── components/   # 组件
│   ├── views/        # 页面
│   ├── stores/       # 状态管理
│   ├── services/     # 业务服务
│   ├── plugins/      # 插件系统
│   └── types/        # 类型定义
├── public/           # 公共资源
└── package.json
```

## License

MIT
