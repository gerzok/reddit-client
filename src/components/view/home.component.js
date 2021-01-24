import React, { Component } from 'react';

class HomeComp extends Component {
  componentDidMount() {
    const { getTopList, token: { access_token } } = this.props;
    getTopList(access_token);
  }

  render() {
    return(
      <div>
        <h1>Reddit Client</h1>
      </div>
    );
  };
}

export default HomeComp;