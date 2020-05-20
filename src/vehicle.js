import React from 'react';

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      color: "red",
      year: 2020
    }
  }

  changeColor = () => {
    this.setState({color: "green"})
  }

  render() {
    return (
      <div>
        <h2>
          Hi, I am a {this.state.color} {this.state.type} from {this.state.year}!
        </h2>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default Vehicle;