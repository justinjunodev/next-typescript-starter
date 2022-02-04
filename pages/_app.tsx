import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import useAnalytics from 'hooks/useAnalytics';

const App = ({ Component, pageProps }: AppProps) => {
  useAnalytics();
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
