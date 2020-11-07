import * as React from 'react';
import * as ReactDom from 'react-dom';

class MyButton extends React.Component<{}, { liked: boolean }> {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return <button onClick={() => this.setState({ liked: true })}>Like</button>
  }
}

const container = document.querySelector('#maindiv');
ReactDom.render(<MyButton />, container);
