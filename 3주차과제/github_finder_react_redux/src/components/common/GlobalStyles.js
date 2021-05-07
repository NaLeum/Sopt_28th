import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    a{
        text-decoration : none;
    }
    @keyframes rotate-loading {
            0%  {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
        }

        @keyframes loading-text-opacity {
            0%  {opacity: 0}
            20% {opacity: 0}
            50% {opacity: 1}
            100%{opacity: 0}
        }
`

export default GlobalStyles;