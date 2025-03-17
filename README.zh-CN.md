# 独立开发者的成长之路

一个展示独立开发者从灵感到规模化的成长阶段的静态网站。使用 Next.js 构建，具有响应式全屏设计和多语言支持。

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
│   │   ├── locales/      # 语言文件（en.yaml, zh.yaml, ja.yaml）
│   │   └── pages/        # 页面组件
├── shared/               # 共享类型和模式
└── server/              # 服务器配置
```

## 内容配置

网站内容通过 `client/src/locales` 目录中的 YAML 文件管理。每种语言都有自己的 YAML 文件，结构如下：

```yaml
stages:
  - id: stage-id           # 阶段的唯一标识符
    title: 阶段标题        # 显示标题
    color: "#颜色代码"     # 阶段主题的十六进制颜色代码
    categories:
      - id: category-id    # 分类的唯一标识符
        title: 分类标题
        description: 分类描述文本
        icon: 🔍           # 分类的表情符号或图标
        link: https://example.com/category  # 更多信息的外部链接
```

### 添加新语言

1. 在 `client/src/locales` 创建新的 YAML 文件（例如 `fr.yaml`）
2. 从现有语言文件复制结构
3. 翻译所有内容，保持相同的 ID 和结构
4. 在 `LanguageSwitcher.tsx` 中添加语言选项

### 修改内容

- 每个阶段和分类必须有唯一的 ID
- 颜色应该使用十六进制格式
- 图标可以是表情符号或 HTML 实体
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

4. 在浏览器中打开 [http://localhost:5000](http://localhost:5000)

## 项目灵感

本项目旨在指导独立开发者完成从最初的灵感到成功成长的全过程。每个部分代表独立开发者旅程中的一个关键阶段，为每个发展阶段提供资源和见解。

## 许可证

MIT