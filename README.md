# Lars Moelleken - Portfolio

Professional portfolio website for Lars Moelleken, Senior PHP Developer & Software Architect.

## Features

- Modern, responsive design with Tailwind CSS
- Accessible UI with ARIA labels and keyboard navigation
- Sections: About, Experience, Projects, Skills, Contact
- Optimized for performance and SEO

## Prerequisites

- Node.js (v18 or higher)
- npm

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured to deploy to GitHub Pages automatically:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at: `https://voku.github.io/lars_moelleken/`

You can also manually trigger the deployment from the GitHub Actions tab.

### Manual Deployment

If you want to deploy manually:

1. Build the project: `npm run build`
2. The `dist` directory contains the static files ready for deployment
3. Deploy the contents of the `dist` directory to any static hosting service

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Technology Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

- `App.tsx` - Main application component
- `constants.ts` - Profile data, projects, skills, and experience
- `types.ts` - TypeScript type definitions
- `index.tsx` - Application entry point
- `index.html` - HTML template
- `vite.config.ts` - Vite configuration

## License

© 2024 Lars Moelleken. All rights reserved.
