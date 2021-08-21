import * as React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StudyDecksName>Study Decks</StudyDecksName>
        <StyledNav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Login</NavLink>
        </StyledNav>
      </StyledHeader>
      <StyledSeparator />
    </>
  );
}

const StyledHeader = styled.header`
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

const StyledNav = styled.nav`
  list-style: none;
  float: right;
  height: 100%;

  display: flex;
  align-items: stretch;
`;

const NavLink = styled.a`
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

const StyledSeparator = styled.div`
  clear: both;
  border-bottom: 1px solid #ddd;
`;
