import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // ES6
    this.setState({
      [name]: value,
    });

    /* ES5
    var partialState = {};
    partialState[name] = value;
    this.setState(partialState);*/
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
          {/* <input name="numberOfGuests" type="text" value="some value"  /> */}
          {/* <input name="numberOfGuests" type="text" value={null}  /> */}
        </label>
      </form>
    );
  }
}

export default Reservation;
