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
- 📦 **Static Generation**: Fast loading and easy deployment
- 🔄 **Smooth Navigation**: Intuitive scrolling with stage indicators

## Tech Stack

- React + Vite
- TailwindCSS
- TypeScript
- Express

## Project Structure

```
.
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── lib/          # Utilities and hooks
│   │   ├── locales/      # Locale files (en.ts, zh.ts, ja.ts)
│   │   └── pages/        # Page components
├── shared/               # Shared types and schemas
└── server/              # Server configuration
```

## Content Structure

The website content is structured in TypeScript files under `client/src/locales`. Each language has its own file with the following structure:

```typescript
export default {
  stages: [
    {
      id: "stage-id",           // Unique identifier for the stage
      title: "Stage Title",     // Display title
      color: "#ColorCode",      // HEX color code for the stage theme
      categories: [
        {
          id: "category-id",    // Unique identifier for the category
          title: "Category Title",
          resources: [
            {
              id: "resource-id",
              title: "Resource Title",
              description: "Resource description",
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

### Adding a New Language

1. Create a new `.ts` file in `client/src/locales` (e.g., `fr.ts`)
2. Copy the structure from an existing language file
3. Translate all content while maintaining the same IDs and structure
4. Add the language option to `LanguageSwitcher.tsx`

### Modifying Content

- Each stage and category must have a unique ID
- Colors should be provided in HEX format
- Icons should be image URLs
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project can be deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure the build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`

## License

MIT