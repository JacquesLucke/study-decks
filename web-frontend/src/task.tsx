import * as React from "react";
import styled from "styled-components";

export default function Task() {
  return (
    <>
      <StyledTaskBody>
        How are countries generally classified into rich and poor?
      </StyledTaskBody>
      <TextArea />
      <ButtonRow />
    </>
  );
}

function TextArea() {
  return (
    <StyledTextAreaContainer>
      <StyledTextArea rows={2} />
    </StyledTextAreaContainer>
  );
}

function ButtonRow() {
  return (
    <>
      <StyledCheckButton>Check Answer</StyledCheckButton>
    </>
  );
}

const StyledTaskBody = styled.article`
  max-width: 60rem;
  margin: 0 auto;
  font-family: "Roboto";
  font-size: 20pt;
  padding: 0 1em;
`;

const StyledTextAreaContainer = styled.div`
  margin: 1em auto;
  max-width: 60rem;
  padding-left: 1em;
  padding-right: 1em;
`;

const StyledTextArea = styled.textarea`
  display: block;
  background-color: #f8f8f8;
  width: 100%;
  box-sizing: border-box;
  font-family: "Roboto";
  font-size: 16pt;
  resize: vertical;
  padding: 0.2em;
  border-radius: 0.2em;
  border: 1px solid #aaa;
`;

const StyledCheckButton = styled.button`
  padding: 1em;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 0.2em;
  max-width: 60rem;
  width: 100%;
  margin: 1em auto;
  display: block;
  font-size: 12pt;
  font-family: "Roboto";

  &:hover {
    background-color: #bbb;
  }

  &:active {
    background-color: #aaa;
  }
`;
