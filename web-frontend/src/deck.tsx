import * as React from "react";
import styled from "styled-components";
import DeckHeader from "./deck-header";
import Task from "./task";

export default function Deck() {
  return (
    <section>
      <DeckHeader />
      <Task />
    </section>
  );
}
