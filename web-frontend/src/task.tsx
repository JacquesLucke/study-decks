import * as React from "react";
import styled from "styled-components";

export default function Task() {
  return (
    <StyledTaskBody>
      How are countries generally classified into rich and poor?
    </StyledTaskBody>
  );
}

const StyledTaskBody = styled.article`
  max-width: 60rem;
  margin: 0 auto;
  font-family: "Roboto";
  font-size: 20pt;
  padding: 0 1em;
`;
