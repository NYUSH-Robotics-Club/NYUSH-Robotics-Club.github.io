# NYU Shanghai Robotics Club Website

This repository contains the source code for the NYU Shanghai Robotics Club website.
It is built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/) using [Vite](https://vitejs.dev/) for fast development and builds.

## Features
- Client-side routing with React Router
- English and Chinese localization powered by `react-i18next`
- Modular components for header, footer and individual pages

## Project Structure
```
.
├── public/           # static assets copied as-is
├── src/
│   ├── components/   # shared UI components
│   ├── pages/        # page components used by routes
│   ├── i18n/         # locale files and i18n setup
│   └── main.tsx      # application entry point
├── index.html        # Vite HTML entry
└── package.json      # npm scripts and dependencies
```

## Development
1. Install dependencies
   ```bash
   npm install
   ```
2. Start a development server with hot-reload
   ```bash
   npm run dev
   ```
3. Create a production build
   ```bash
   npm run build
   ```
4. Preview the production build locally
   ```bash
   npm run preview
   ```

## Internationalization
Locale files live in `src/i18n/` and contain English (`en.json`) and Chinese (`zh.json`) translations.
Use the `t('key')` function from `react-i18next` inside components to render localized text.

## License
This project is intended for the NYU Shanghai Robotics Club and does not yet include a specific license.
