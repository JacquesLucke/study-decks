import * as React from "react";
import * as ReactDom from "react-dom";
import "./app-style.scss";

class AppHeader extends React.Component {
  render() {
    return (
      <div className="app-header">
        <div className="app-header-content">
          <div className="app-header-name">Study Decks</div>
          <div className="app-header-right">
            <nav>
              <ul>
                <li>Log In</li>
                <li>About</li>
                <li>Home</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

class DeckInfo extends React.Component {
  render() {
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
}

class DeckTask extends React.Component {
  render() {
    return <div className="deck-task">Study Task</div>;
  }
}

class DeckProgress extends React.Component {
  render() {
    return <div className="deck-progress">Progress</div>;
  }
}

class AppBody extends React.Component {
  render() {
    return (
      <div className="app-body">
        <DeckInfo />
        <DeckTask />
        <DeckProgress />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppBody />
      </div>
    );
  }
}

const container = document.querySelector("#app-div");
ReactDom.render(<App />, container);
