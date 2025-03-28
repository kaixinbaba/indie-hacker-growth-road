# 独立开发者的成长之路

一个展示独立开发者从灵感到规模化的成长阶段的静态网站。使用 React + Vite 构建，具有响应式全屏设计和多语言支持。

[中文文档](README.zh-CN.md) | [English](README.md)

![预览](preview.png)

## 特点

- 📱 **响应式设计**：适配各种设备的全屏展示
- 🌐 **多语言支持**：中文、英文和日语无缝切换
- 🎨 **主题分区**：六个独特的成长阶段，每个阶段都有其独特的配色
  - 灵感启发（蓝色）
  - 项目构建（绿色）
  - 产品发布（紫色）
  - 商业变现（金色）
  - 持续运营（青色）
  - 规模增长（粉色）
- 📦 **静态生成**：快速加载和简单部署
- 🔄 **流畅导航**：直观的滚动和阶段指示器

## 技术栈

- React + Vite
- TailwindCSS
- TypeScript
- Express

## 项目结构

```
.
├── client/
│   ├── src/
│   │   ├── components/    # 可复用UI组件
│   │   ├── lib/          # 工具函数和钩子
│   │   ├── locales/      # 语言文件（en.ts, zh.ts, ja.ts）
│   │   └── pages/        # 页面组件
├── shared/               # 共享类型和模式
└── server/              # 服务器配置
```

## 内容结构

网站内容通过 `client/src/locales` 目录中的 TypeScript 文件管理。每种语言都有自己的文件，结构如下：

```typescript
export default {
  stages: [
    {
      id: "stage-id",           // 阶段的唯一标识符
      title: "阶段标题",         // 显示标题
      color: "#颜色代码",       // 阶段主题的十六进制颜色代码
      categories: [
        {
          id: "category-id",    // 分类的唯一标识符
          title: "分类标题",
          resources: [
            {
              id: "resource-id",
              title: "资源标题",
              description: "资源描述",
              icon: "https://example.com/icon.png",
              iconType: "image",
              link: "https://example.com"
            }
          ]
        }
      ]
    }
  ]
}
```

### 添加新语言

1. 在 `client/src/locales` 创建新的 `.ts` 文件（例如 `fr.ts`）
2. 从现有语言文件复制结构
3. 翻译所有内容，保持相同的 ID 和结构
4. 在 `LanguageSwitcher.tsx` 中添加语言选项

### 修改内容

- 每个阶段和分类必须有唯一的 ID
- 颜色应该使用十六进制格式
- 图标应该是图片 URL
- 链接应该是完整的 URL
- 在所有语言文件中保持一致的结构

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

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 部署

本项目可以部署到 Vercel：

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置构建设置：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`


## 许可证

MIT