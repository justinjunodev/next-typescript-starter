# Next + TypeScript Starter

**A Next + TypeScript Starter by [Justin Juno](https://twitter.com/justinjunodev). Featuring Styled-Components, Playwright, ESLint, Prettier, Axe a11y monitoring, Fathom analytics, sitemap generation, and more!**

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![image](https://img.shields.io/badge/Playwright-3bb13b?style=for-the-badge&logo=playwright&logoColor=white)
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=white)

### ✅ Feature Overview.

- [x] `Styled-Components` with global styles, a modern reset, and theme support.
- [x] `ESLint` + `Prettier` setup for maintaining code quality and formatting.
- [x] `Playwright` configured for cross-browser and cross-platform testing.
- [x] `useAnalytics` hook for quickly enabling site analytics via Fathom.
- [x] `useAxe` hook for monitoring and reporting accessibility issues within dev console.
- [x] Custom `SEO` component based on Open Graph standards.
- [x] Custom `Link` component for handling both internal and external links.
- [x] Custom `404` page for invalid routes.
- [x] Automatic sitemap and `robots.txt` generation with `next-sitemap`.

---

### 🚀 Getting Started.

1. Clone and/ or download the project locally.
1. Navigate to the projects root directory and install its dependencies: `npm i`
1. Open `lib/metaFields` in your editor and update the default meta fields. _Note: this is an important step, as these fields are referenced in the `SEO` component, `useAnalytics` hook, and `next-sitemap`._ This is also where you can set your html documents `lang` attribute.
1. Rename the `.env.sample` file to `.env.local` and add your Fathom site id to the `NEXT_PUBLIC_FATHOM_SITE_ID` environment variable. You’ll also need to add this environment variable to your project's deployment settings in Vercel (or wherever your project is hosted). _Note:_ _If you are not using Fathom analytics, you can delete the `hooks/useAnalytics` file and remove its invocation from `_app.tsx`._
1. You’re ready to code! Start your development environment `npm run dev` and build something awesome.
1. To update dependencies and remove existing package files, node modules, and next directory/ cache, use the `npm run clean` command.
1. Test are located within the `tests` directory and will run with the `npm run test` command. Results will be logged by default. To view a full report, run `npm run test:report` after your tests have completed. To modify your testing configuration, see the `playwright.config.ts` file in the root directory.

---

### 🔗 Documentation and Resources.

- **[Next](https://nextjs.org/)** - React framework for production.
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly-typed programming language that builds on JavaScript.
- **[Styled-Components](https://styled-components.com/)** - CSS-in-JS styling solution.
- **[Microsoft Playwright](https://playwright.dev/)** - Fast and reliable end-to-end testing for modern apps.
- **[ESLint](https://eslint.org/)** - Code analysis tool monitoring code and maintaining quality.
- **[Prettier](https://prettier.io/)** - Opinionated code formatter.
- **[Axe-Core](https://www.npmjs.com/package/@axe-core/react)** - Accessibility testing library.
- **[Next-Sitemap](https://www.npmjs.com/package/next-sitemap)** - Sitemap generator for Next.
- **[Fathom](https://usefathom.com/ref/FBBCWG)** - Privacy first analytics.

---

### 🙇‍♂️ Credits.

- [Josh Comeau](https://twitter.com/joshwcomeau) for their amazing [css reset](https://www.joshwcomeau.com/css/custom-css-reset/) that I modified for this starter.
- [Scott Moss](https://twitter.com/scotups) for their amazing [eslint config](https://frontendmasters.com/courses/fullstack-app-next/) that I modified for this starter.

---

### ⭐️ Contributions.

Thanks for your interest in this project! Pull Requests are welcome for any level of improvement, from small typos to pesky bugs, let’s make this project better. More information can be found in the `CONTRIBUTING.md` file.
