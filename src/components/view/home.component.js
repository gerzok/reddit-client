import React, { Component, Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner'

class HomeComp extends Component {
  componentDidMount() {
    const { getTopList, token: { access_token } } = this.props;
    getTopList(access_token);
  }

  render() {
    const { topList } = this.props;
    const { data = { children: null } } = topList;
    const { children } = data;

    return(
        <Fragment>
          {!children ? (
            <Fragment>
              <Spinner animation="border" variant="secondary" /> <span>Loading...</span>
            </Fragment>
          ) : (
            <div>
              <h1>Reddit Client</h1>
            </div>
          )}
        </Fragment>
    );
  };
}

export default HomeComp;