# Independent Developer Growth Road

A static website showcasing the growth stages of independent developers, from inspiration to scaling. Built with Next.js and featuring a responsive, full-screen section design with multilingual support.

![Preview](preview.png)

## Features

- 📱 **Responsive Design**: Full-screen sections that adapt beautifully to any device
- 🌐 **Multilingual**: Seamless switching between English and Chinese
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
│   │   ├── locales/      # Language files (en.ts, zh.ts)
│   │   └── pages/        # Page components
├── shared/               # Shared types and schemas
└── server/              # Server configuration
```

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
