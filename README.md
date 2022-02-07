# Next + TypeScript Starter

**A Next + TypeScript Starter by [Justin Juno](https://justinjuno.dev/). Featuring Styled-Components, ESLint, Prettier, Axe a11y monitoring, Fathom analytics, sitemap generation, and more!**

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![image](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![image](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

---

### ✅ Feature Overview:

- Preconfigured `Styled-Components` with global styles, a reset, and theme support.
- Preconfigured `ESLint` + `Prettier` files for maintaining code standards and consistency.
- `useAnalytics` hook for quickly enabling site analytics via Fathom.
- `useAxe` hook for monitoring and reporting accessibility issues via Chrome console.
- Custom `SEO` component based on Open Graph standards.
- Custom `Link` component for handling both internal and external links.
- Custom `404` page for invalid routes.
- Automatic sitemap and robots.txt generation with `next-sitemap`.

---

### 🚀 Getting Started:

1. Clone and/ or download the project locally.
2. Navigate to the projects root directory and install its dependencies: `npm i`
3. Open `lib/metaFields` in your editor and update the default meta fields. _Note: this is an important step, as these fields are referenced in the `SEO` component, `useAnalytics` hook, and `next-sitemap`._
4. Rename the `.env.sample` file to `.env.local` and add your Fathom site id to the `NEXT_PUBLIC_FATHOM_SITE_ID` environment variable. You’ll also need to add this environment variable to your project's deployment settings in Vercel (or wherever your project is hosted). _Note:_ _If you are not using Fathom analytics, you can delete the `hooks/useAnalytics` file and remove its invocation from `_app.tsx`._
5. You’re ready to code! Start your development environment `npm run dev` and build something awesome.

---

### 🔗 Documentation and Resources:

- **[Next](https://nextjs.org/)** - React framework for production.
- **[TypeScript](https://www.typescriptlang.org/)** - Strongly-typed programming language that builds on JavaScript.
- **[Styled-Components](https://styled-components.com/)** - CSS-in-JS styling solution.
- **[ESLint](https://eslint.org/)** - Code analysis tool monitoring code and maintaining quality.
- **[Prettier](https://prettier.io/)** - Opinionated code formatter.
- **[Axe-Core](https://www.npmjs.com/package/@axe-core/react)** - Accessibility testing library.
- **[Next-Sitemap](https://www.npmjs.com/package/next-sitemap)** - Sitemap generator for Next.
- **[Fathom](https://usefathom.com/ref/FBBCWG)** - Privacy first analytics.

---

### ⭐️ Contributions:

Thanks for your interest in this project! Pull Requests are welcome for any level of improvement, from small typos to pesky bugs, let’s make this project better. When opening or responding to an issue, please be kind, patient, and open to feedback. Derogatory comments, insults, etc. aren't cool, nor tolerated.
