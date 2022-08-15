import { Layout, Link, SEO } from 'components'

const HomePage = () => {
  return (
    <Layout>
      <SEO pageName="Home" />
      <h1 className="text-3xl font-bold">Next + TypeScript Starter</h1>
      <p className="my-4">
        Featuring Tailwind CSS, Playwright, ESLint, Prettier, Axe a11y
        monitoring, Fathom analytics, and more!
      </p>
      <Link
        href="https://github.com/justinjunodev/next-typescript-starter"
        isExternal
      >
        View on GitHub
      </Link>
    </Layout>
  )
}

export default HomePage
