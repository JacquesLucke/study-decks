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

class AppBodyLeftSidebar extends React.Component {
  render() {
    return <div className="app-body-left-sidebar">Left Sidebar</div>;
  }
}

class AppBodyCenter extends React.Component {
  render() {
    return <div className="app-body-center">Center</div>;
  }
}

class AppBpdyRightSidebar extends React.Component {
  render() {
    return <div className="app-body-right-sidebar">Right Sidebar</div>;
  }
}

class AppBody extends React.Component {
  render() {
    return (
      <div className="app-body">
        <AppBodyLeftSidebar />
        <AppBodyCenter />
        <AppBpdyRightSidebar />
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
