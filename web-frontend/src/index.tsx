import * as React from "react";
import * as ReactDom from "react-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import RobotoFont from "./fonts/Roboto/Roboto-Light-webfont.woff";

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
    <div>
      <GlobalStyleReset />
      <FontFaces />

      <TopBar />
      <MainBody />
    </div>
  );
}

const TopBarNav = styled.nav`
  margin: 0 auto;
  max-width: 70rem;
  height: 3em;
`;

const StudyDecksName = styled.div`
  float: left;
  font-family: "Roboto";
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  font-size: large;
  padding-left: 1em;
`;

const TopBarNavList = styled.div`
  list-style: none;
  float: right;
  height: 100%;

  display: flex;
  align-items: stretch;
`;

const NavElem = styled.div`
  font-family: "Roboto";
  padding: 0 2em;
  transition: 0.1s;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    color: #224;
  }
`;

const TopBarSeparator = styled.div`
  clear: both;
  border-bottom: 1px solid #ddd;
`;

function TopBar() {
  return (
    <>
      <TopBarNav>
        <StudyDecksName>Study Decks</StudyDecksName>
        <TopBarNavList>
          <NavElem>Home</NavElem>
          <NavElem>About</NavElem>
          <NavElem>Login</NavElem>
        </TopBarNavList>
      </TopBarNav>
      <TopBarSeparator />
    </>
  );
}

function MainBody() {
  return (
    <div>
      <DeckHeader />
      <DeckProgress />
      <TaskBody />
    </div>
  );
}

const DeckHeaderText = styled.div`
  font-family: "Roboto";
  font-size: large;
  text-align: center;
  margin-top: 1em;
`;

function DeckHeader() {
  return (
    <DeckHeaderText>
      Productivity and Growth: Crash Course Economics #6
    </DeckHeaderText>
  );
}

const DeckProgressDiv = styled.div`
  max-width: 30rem;
  height: 0.7em;
  margin: 1em auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-content: stretch;
`;

function DeckProgress() {
  return (
    <DeckProgressDiv>
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="fail" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={true} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
    </DeckProgressDiv>
  );
}

const colorBySuccessState = {
  success: "#aea",
  fail: "#eaa",
  todo: "#ddd",
};

const DeckProgressTaskDiv = styled.div`
  flex: 1;
  background: ${(props) => colorBySuccessState[props.successState]};
  border-radius: 0.2em;
  transition: 0.2s;
  ${(props) =>
    props.isActive &&
    css`
      filter: brightness(70%);
    `}

  &:hover {
    border-radius: 1em;
    filter: brightness(80%);
  }
`;

function DeckProgressTask({ isActive, successState }) {
  return (
    <DeckProgressTaskDiv isActive={isActive} successState={successState} />
  );
}

const TaskBodyDiv = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  font-family: "Roboto";
  font-size: 20pt;
  padding: 0 1em;
`;

function TaskBody() {
  return (
    <TaskBodyDiv>
      How are countries generally classified into rich and poor?
    </TaskBodyDiv>
  );
}

const container = document.querySelector("#app-div");
ReactDom.render(<App />, container);
