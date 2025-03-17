# Independent Developer Growth Road

A static website showcasing the growth stages of independent developers, from inspiration to scaling. Built with Next.js and featuring a responsive, full-screen section design with multilingual support.

[中文文档](README.zh-CN.md) | [English](README.md)

![Preview](preview.png)

## Features

- 📱 **Responsive Design**: Full-screen sections that adapt beautifully to any device
- 🌐 **Multilingual**: Seamless switching between English, Chinese, and Japanese
- 🎨 **Themed Sections**: Six distinct growth stages, each with its own color theme
  - Inspiration (Blue)
  - Building (Green)
  - Launch (Purple)
  - Monetization (Gold)
  - Operations (Teal)
  - Growth (Pink)
- 📦 **Static Generation**: Fast loading and easy deployment with static site generation
- 🔄 **Smooth Navigation**: Intuitive scrolling with stage indicators

## Tech Stack

- Next.js 14+
- TailwindCSS
- React
- TypeScript

## Project Structure

```
.
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/          # Utilities and hooks
│   │   ├── locales/      # Language files (en.yaml, zh.yaml, ja.yaml)
│   │   └── pages/        # Page components
├── shared/               # Shared types and schemas
└── server/              # Server configuration
```

## Content Configuration

The website content is managed through YAML files in the `client/src/locales` directory. Each language has its own YAML file with the following structure:

```yaml
stages:
  - id: stage-id           # Unique identifier for the stage
    title: Stage Title     # Display title
    color: "#ColorCode"    # HEX color code for the stage theme
    categories:
      - id: category-id    # Unique identifier for the category
        title: Category Title
        description: Category description text
        icon: 🔍           # Emoji or icon for the category
        link: https://example.com/category  # External link for more information
```

### Adding a New Language

1. Create a new YAML file in `client/src/locales` (e.g., `fr.yaml`)
2. Copy the structure from an existing language file
3. Translate all content while maintaining the same IDs and structure
4. Add the language option to `LanguageSwitcher.tsx`

### Modifying Content

- Each stage and category must have a unique ID
- Colors should be provided in HEX format
- Icons can be emojis or HTML entities
- Links should be full URLs
- Maintain consistent structure across all language files

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/kaixinbaba/indie-hacker-growth-road.git
   cd indie-hacker-growth-road
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5000](http://localhost:5000) in your browser.

## Inspiration

This project aims to guide independent developers through their journey from initial inspiration to successful growth. Each section represents a crucial stage in the indie hacker journey, providing resources and insights for each phase of development.

## License

MIT