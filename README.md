## Alejandro Oviedo's persomal project and interest website
### Stack
###### based on Next.js boilerplate:https://github.com/ixartz/Next-js-Boilerplate:
- โก [Next.js](https://nextjs.org) for Static Site Generator
- ๐ฅ Type checking [TypeScript](https://www.typescriptlang.org)
- ๐ Integrate with [Tailwind CSS](https://tailwindcss.com)
- โ Strict Mode for TypeScript and React 18
- ๐ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- ๐ Code Formatter with [Prettier](https://prettier.io)
- ๐ฆ Husky for Git Hooks
- ๐ซ Lint-staged for running linters on Git staged files
- ๐ Lint git commit with Commitlint
- ๐ฆบ Unit Testing with Jest and React Testing Library
- ๐งช E2E Testing with Cypress
- ๐ก Absolute Imports using `@` prefix
- ๐ VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
- ๐ค SEO metadata, JSON-LD and Open Graph tags with Next SEO
- โ๏ธ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- ๐ฑ๏ธ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- ๐ Include a FREE minimalist theme
- ๐ฏ Maximize lighthouse score
- Vanta for background 3D visualizations.
- Three.js for 3D visualizations.

Built-in feature from Next.js:

- โ Minify HTML & CSS
- ๐จ Live reload
- โ Cache busting

### Requirements

- Node.js 14+ and npm
### Getting started

Then, you can run locally in development mode with live reload:

```shell
npm install && npm run dev
```
### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, the website is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

If you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

