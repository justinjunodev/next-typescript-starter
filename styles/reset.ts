import { css } from 'styled-components';

const reset = css`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    scroll-behavior: smooth;
  }

  ol,
  ul {
    list-style: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  textarea {
    white-space: revert;
  }

  table {
    border-collapse: collapse;
  }

  #__next {
    font-family: sans-serif;
    isolation: isolate;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      @-moz-document url-prefix() {
        & {
          scroll-behavior: initial;
        }
      }
    }
  }
`;

export default reset;
