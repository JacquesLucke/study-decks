import * as React from "react";
import { Link, Switch, Route, Redirect, useParams } from "react-router-dom";
import { TaskView } from "./task-view";

export function DeckPage() {
  const { deck_id } = useParams();
  const [deck_data, setDeckData] = React.useState();

  React.useEffect(() => {
    get_deck_data(deck_id).then((loaded_deck_data) => {
      setDeckData(loaded_deck_data);
    });
  }, [deck_id]);

  if (deck_data === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="deck">
      <DeckInfo deck_data={deck_data} />
      <DeckTaskArea deck_data={deck_data} />
      <DeckProgress />
    </div>
  );
}

async function get_deck_data(deck_id: string) {
  const response = await fetch(`/api/deck/${deck_id}`);
  const response_json = await response.json();
  response_json.id = deck_id;
  return response_json;
}

function DeckInfo({ deck_data }) {
  return (
    <div className="deck-info">
      <a href={deck_data.link}>{deck_data.name}</a>
    </div>
  );
}

function DeckTaskArea({ deck_data }) {
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

function DeckTask({ deck_data }) {
  const { task_id } = useParams();
  const task_index = parseInt(task_id);
  const task = deck_data.tasks[task_index];
  if (task === undefined) {
    return <Redirect to="." />;
  }

  return (
    <div className="deck-task">
      <TaskView task={task} />
      <br />
      <Link to={`./${task_index - 1}`}>Back</Link>
      <br />
      <Link to={`./${task_index + 1}`}>Next</Link>
    </div>
  );
}

function DeckProgress() {
  return <div className="deck-progress">Progress</div>;
}
