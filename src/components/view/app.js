import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Home from './home.container';
import { getToken } from '../state/actions';
import Spinner from 'react-bootstrap/Spinner';

class RedditAppComp extends Component {
  componentDidMount() {
    const { getToken } = this.props;
    getToken();
  }

  render() {
    const { token } = this.props;
    return(
      <Fragment>
        {!token ? (
          <Fragment>
            <Spinner animation="border" variant="secondary" /> <span>Loading...</span>
          </Fragment>
        ) : (
          <Home />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(getToken())
});

const RedditApp = connect(mapStateToProps, mapDispatchToProps)(RedditAppComp);

export default RedditApp;