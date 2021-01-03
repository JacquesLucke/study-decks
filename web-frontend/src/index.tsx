import * as React from "react";
import * as ReactDom from "react-dom";
import "./app-style.scss";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <AppBody />
    </BrowserRouter>
  );
}

function AppHeader() {
  return (
    <div className="app-header">
      <div className="app-header-content">
        <div className="app-header-name">Study Decks</div>
        <div className="app-header-right">
          <nav>
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

function AppBody() {
  return (
    <div className="app-body">
      <Switch>
        <Route exact path="/">
          <DeckInfo />
          <DeckTask />
          <DeckProgress />
        </Route>
        <Route exact path="/login">
          Login
        </Route>
        <Route exact path="/about">
          About
        </Route>
      </Switch>
    </div>
  );
}

function DeckInfo() {
  return (
    <div className="deck-info">
      <p>You are learning:</p>
      <p>How to do X?</p>
      <hr />
      <p>Author: Some Name</p>
      <p>Questions: XX</p>
      <p>Released: XX</p>
      <p>Last Modified: XX</p>
    </div>
  );
}

function DeckTask() {
  const [question, setQuestion] = React.useState(null);

  React.useEffect(() => {
    fetch("./question").then(async (response) => {
      const response_json = await response.json();
      setTimeout(() => setQuestion(response_json), 1000);
    });
  }, []);

  let current_task = <p>Loading...</p>;

  if (question !== null) {
    current_task = (
      <>
        <MultipleChoiceTask {...question} />
        <br />
        <SubmitTaskButton />
      </>
    );
  }

  return <div className="deck-task">{current_task}</div>;
}

function DeckProgress() {
  return <div className="deck-progress">Progress</div>;
}

function MultipleChoiceTask({
  question,
  answers,
}: {
  question: string;
  answers: string[];
}) {
  return (
    <div>
      <p>{question}</p>
      {answers.map((answer, index) => (
        <div key={index}>
          <input type="checkbox" />
          <label>{answer}</label>
          <br />
        </div>
      ))}
    </div>
  );
}

function SubmitTaskButton() {
  return <button>Submit</button>;
}

const container = document.querySelector("#app-div");
ReactDom.render(<App />, container);
