import * as React from "react";
import styled from "styled-components";

export default function Task() {
  return (
    <>
      <StyledTaskBody>
        How are countries generally classified into rich and poor?
      </StyledTaskBody>
      <TextArea />
    </>
  );
}

function TextArea() {
  return (
    <StyledTextAreaContainer>
      <StyledTextArea rows={5} />
    </StyledTextAreaContainer>
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
