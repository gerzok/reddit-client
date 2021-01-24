import React, { Component } from 'react';

class RedditAppComp extends Component {
  componentDidMount() {
    this.props.getToken();
  }

  render() {
    return(
      <div>
        <h1>Reddit Client</h1>
      </div>
    );
  };
}

export default RedditAppComp;