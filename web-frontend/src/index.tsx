import * as React from "react";
import * as ReactDom from "react-dom";
import "./app-style.scss";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { AboutPage } from "./about_page";
import { HomePage } from "./home_page";
import { LoginPage } from "./login_page";
import { DeckPage } from "./deck_page";

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
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="/deck/:deck_id">
          <DeckPage />
        </Route>
        <Route path="/">Page not found.</Route>
      </Switch>
    </div>
  );
}

const container = document.querySelector("#app-div");
ReactDom.render(<App />, container);
