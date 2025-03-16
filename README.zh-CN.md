# 独立开发者的成长之路

一个展示独立开发者从灵感到规模化的成长阶段的静态网站。使用 Next.js 构建，具有响应式全屏设计和多语言支持。

![预览](preview.png)

## 特点

- 📱 **响应式设计**：适配各种设备的全屏展示
- 🌐 **多语言支持**：中英文无缝切换
- 🎨 **主题分区**：六个独特的成长阶段，每个阶段都有其独特的配色
  - 灵感启发（蓝色）
  - 项目构建（绿色）
  - 产品发布（紫色）
  - 商业变现（金色）
  - 持续运营（青色）
  - 规模增长（粉色）
- 📦 **静态生成**：通过静态站点生成实现快速加载和简单部署
- 🔄 **流畅导航**：直观的滚动和阶段指示器

## 技术栈

- Next.js 14+
- TailwindCSS
- React
- TypeScript

## 项目结构

```
.
├── client/
│   ├── src/
│   │   ├── components/    # 可复用UI组件
│   │   ├── lib/          # 工具函数和钩子
│   │   ├── locales/      # 语言文件（en.ts, zh.ts）
│   │   └── pages/        # 页面组件
├── shared/               # 共享类型和模式
└── server/              # 服务器配置
```

## 本地开发

1. 克隆仓库：
   ```bash
   git clone https://github.com/kaixinbaba/indie-hacker-growth-road.git
   cd indie-hacker-growth-road
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 在浏览器中打开 [http://localhost:5000](http://localhost:5000)

## 项目灵感

本项目旨在指导独立开发者完成从最初的灵感到成功成长的全过程。每个部分代表独立开发者旅程中的一个关键阶段，为每个发展阶段提供资源和见解。

## 许可证

MIT
