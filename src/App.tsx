import React from 'react';

interface Props {};

interface State {
  pressedKey: string;
}

export class App extends React.PureComponent<Props, State> {
  state: State = {
    pressedKey: ''
  };

  pressHandler = (event: KeyboardEvent) => {
    return this.setState({pressedKey: event.key});
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return pressedKey ? (
      <div className="App">
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      </div>
    ) : (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
};
