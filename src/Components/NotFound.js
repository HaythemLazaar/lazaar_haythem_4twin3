import React, { Component } from "react";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.setState({
      show: true,
    });
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        {console.log(this.state.show)}
        {this.state.show ? <h1>Redirect to Movies page</h1> : null}
      </div>
    );
  }
}
