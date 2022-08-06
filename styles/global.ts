import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    body {
        font-family: sans-serif;
    }
`;

export default GlobalStyles;
