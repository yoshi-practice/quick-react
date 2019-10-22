import React, {Component} from 'react';

class ArrowEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickResult: "",
      changeResult: "",
      inputResult: "",
      keyupResult: ""
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

  }

  onClick() {
    this.setState({
      clickResult: "clicked"
    });
  }

  onChange(e) {
    this.setState({
      changeResult: e.target.value
    });
  }

  onInput(e) {
    this.setState({
      inputResult: e.target.value
    });
  }

  onKeyUp(e) {
    this.setState({
      keyupResult: e.target.value
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onClick()}>Click!</button>{this.state.clickResult}<br />
        <input onChange={(e) => this.onChange(e)} placeholder="change" />{this.state.changeResult}<br />
        <input onInput={(e) => this.onInput(e)} placeholder="input" />{this.state.inputResult}<br />
        <input onKeyUp={(e) => this.onKeyUp(e)} placeholder="keyup" />{this.state.keyupResult}
      </div>
    )
  }

}

export default ArrowEvent;