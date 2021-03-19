import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';
import { breakpointsMedia } from '../utils/breakpointsMedia';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color:#fff;
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  #__next:after, #__next:before {
    content: "";
    position: absolute;
    top: 0;
    width: 1px;
    height: 100%;
    background: hsla(0,0%,40%,.3);
    z-index: 9999;
}
#__next:before {
  left: 4%;
}
#__next:after {
  right: 4%;
}

${breakpointsMedia({
  xs: css`
    #__next:before {
      left: 1%;
    }
    #__next:after {
      right: 1%;
    }
  `,
  sm: css``,
  md: css``,
  lg: css``,
  xl: css`
    #__next:before {
      left: 4%;
    }
    #__next:after {
      right: 4%;
    }
  `,
})}

`;
export default GlobalStyle;
