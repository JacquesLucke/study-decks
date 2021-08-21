import * as React from "react";
import * as ReactDom from "react-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import RobotoFont from "./fonts/Roboto/Roboto-Light-webfont.woff";
import Header from "./header";
import Deck from "./deck";

const GlobalStyleReset = createGlobalStyle`
* {
  padding: 0;
  border: 0;
  margin: 0;
}
`;

const FontFaces = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoFont}) format("woff");
  }
`;

function App() {
  return (
    <>
      <GlobalStyleReset />
      <FontFaces />

      <Header />
      <Deck />
    </>
  );
}

const container = document.querySelector("#app-root");
ReactDom.render(<App />, container);
