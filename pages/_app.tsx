import type { AppProps } from 'next/app';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import useAxe from 'hooks/useAxe';
import useAnalytics from 'hooks/useAnalytics';
import theme from 'styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  useAxe();
  useAnalytics();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
