import * as React from "react";
import * as ReactDom from "react-dom";
import "./app-style.scss";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  Redirect,
  useParams,
} from "react-router-dom";

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
                <Link to="/deck/example">Example Deck</Link>
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
          Home
        </Route>
        <Route path="/deck/:deck_id">
          <Deck />
        </Route>
        <Route exact path="/login">
          Login
        </Route>
        <Route exact path="/about">
          About
        </Route>
        <Route path="/">Page not found.</Route>
      </Switch>
    </div>
  );
}

function Deck() {
  const { deck_id } = useParams();
  const [deck_data, setDeckData] = React.useState<DeckData | undefined>();

  React.useEffect(() => {
    get_deck_data(deck_id).then((loaded_deck_data) => {
      setDeckData(loaded_deck_data);
    });
  }, [deck_id]);

  if (deck_data === undefined) {
    return <div>Loading...</div>;
  }

  if (deck_data.tasks.length == 0) {
    return <div>There are no tasks.</div>;
  }

  return (
    <div className="deck">
      <DeckInfo deck_data={deck_data} />
      <DeckTaskArea deck_data={deck_data} />
      <DeckProgress />
    </div>
  );
}

interface Task {
  type: "multiple-choice";
}

interface MultipleChoiceTask extends Task {
  question: string;
  answers: string[];
}

interface DeckData {
  id: string;
  author: string;
  tasks: Task[];
}

async function get_deck_data(deck_id: string): Promise<DeckData> {
  const response = await fetch(`/api/deck/${deck_id}`);
  const response_json = await response.json();
  response_json.id = deck_id;
  return response_json;
}

function DeckInfo({ deck_data }: { deck_data: DeckData }) {
  return (
    <div className="deck-info">
      <p>You are learning:</p>
      <p>How to do X?</p>
      <hr />
      <p>Author: {deck_data.author}</p>
      <p>Questions: {deck_data.tasks.length}</p>
      <p>Released: XX</p>
      <p>Last Modified: XX</p>
    </div>
  );
}

function DeckTaskArea({ deck_data }: { deck_data: DeckData }) {
  return (
    <div className="deck-task">
      <Switch>
        <Route exact path="/deck/:deck_id">
          <Link to={`/deck/${deck_data.id}/0`}>Start</Link>
        </Route>
        <Route path="/deck/:deck_id/:task_id">
          <DeckTask deck_data={deck_data} />
        </Route>
      </Switch>
    </div>
  );
}

function DeckTask({ deck_data }: { deck_data: DeckData }) {
  const { task_id } = useParams();
  const task_index = parseInt(task_id);
  const task = deck_data.tasks[task_index];
  if (task === undefined) {
    return <Redirect to="." />;
  }

  let task_element = <div>Unknown task type.</div>;
  if (task.type == "multiple-choice") {
    const multiple_choice_task = task as MultipleChoiceTask;
    task_element = <MultipleChoiceTask {...multiple_choice_task} />;
  }

  return (
    <div className="deck-task">
      {task_element}
      <br />
      <SubmitTaskButton />
      <Link to={`./${task_index - 1}`}>Back</Link>
      <Link to={`./${task_index + 1}`}>Next</Link>
    </div>
  );
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
