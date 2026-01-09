# Innovation Hub

A React + TypeScript application for managing and showcasing innovation ideas, built with Vite.

## Live Demo

🚀 **Deployed on Firebase:** [https://innovation-studio-at-london.web.app](https://innovation-studio-at-london.web.app)

## Tech Stack

- React 19
- TypeScript
- Vite (with Rolldown)
- React Router DOM
- Firebase Hosting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## Firebase Deployment

This project is configured for deployment to Firebase Hosting.

### Initial Setup

1. **Login to Firebase:**
```bash
npx firebase login
```

2. **Select Firebase Project:**
```bash
npx firebase use pcs-gcp-cr-10069-prj-llabs-uk
```

### Deploy to Firebase

```bash
# Build and deploy in one command
npm run deploy
```

Or manually:

```bash
# Build the app
npm run build

# Deploy to Firebase
npx firebase deploy --only hosting
```

### Firebase Configuration

- **Hosting URL:** https://innovation-studio-at-london.web.app
- **Project ID:** pcs-gcp-cr-10069-prj-llabs-uk
- **Site ID:** innovation-studio-at-london
- **Build Directory:** `dist`

The Firebase configuration files:
- `firebase.json` - Hosting configuration
- `.firebaserc` - Project aliases

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
