import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratExtraBold from "../assets/fonts/Montserrat-ExtraBold.ttf";
import MontserratLight from "../assets/fonts/Montserrat-Light.ttf";
import MontserratExtraLight from "../assets/fonts/Montserrat-ExtraLight.ttf";
import {
  backgroundBody,
  mainFontColor,
  base,
  baseWeight,
} from "./global_varables";

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: local('Montserrat'), local('Montserrat'),
    url(${MontserratRegular}) format('truetype'),
    url(${MontserratBold}) format('truetype'),
    url(${MontserratExtraBold}) format('truetype'),
    url(${MontserratLight}) format('truetype'),
    url(${MontserratExtraLight}) format('truetype');
    font-weight: ${baseWeight};
    font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', 'serif';
    background-color: ${backgroundBody};
    font-size: ${base};
    font-weight: ${baseWeight};
    //line-height: $line-height-default;
    color: ${mainFontColor};
    //-webkit-font-smoothing: antialiased;
    //-moz-osx-font-smoothing: grayscale;
    html, body {
      height: 100%;
    }
  }
`;
