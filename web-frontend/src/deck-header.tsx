import * as React from "react";
import styled, { css } from "styled-components";

export default function DeckHeader() {
  return (
    <>
      <StyledDeckName>
        Productivity and Growth: Crash Course Economics #6
      </StyledDeckName>
      <DeckProgress />
    </>
  );
}

function DeckProgress() {
  return (
    <StyledDeckProgress>
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="fail" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={false} successState="success" />
      <DeckProgressTask isActive={true} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
      <DeckProgressTask isActive={false} successState="todo" />
    </StyledDeckProgress>
  );
}

function DeckProgressTask({ isActive, successState }) {
  return (
    <StyledDeckTaskProgress isActive={isActive} successState={successState} />
  );
}

const StyledDeckName = styled.h1`
  font-family: "Roboto";
  font-size: large;
  text-align: center;
  margin-top: 1em;
  font-weight: normal;
`;

const StyledDeckProgress = styled.div`
  max-width: 30rem;
  height: 0.7em;
  margin: 1em auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;
  align-content: stretch;
`;

const colorBySuccessState = {
  success: "#aea",
  fail: "#eaa",
  todo: "#ddd",
};

const StyledDeckTaskProgress = styled.div`
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
