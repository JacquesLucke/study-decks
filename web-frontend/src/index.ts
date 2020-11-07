import * as React from 'react';
import * as ReactDom from 'react-dom';

class MyButton extends React.Component<{}, {liked: boolean}> {
  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return React.createElement('button', {onClick: () => this.setState({liked: true})}, 'Like');
  }
}

const container = document.querySelector('#maindiv');
ReactDom.render(React.createElement(MyButton), container);
