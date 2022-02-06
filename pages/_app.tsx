import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import useAxe from 'hooks/useAxe';
import useAnalytics from 'hooks/useAnalytics';

const App = ({ Component, pageProps }: AppProps) => {
  useAxe();
  useAnalytics();

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
