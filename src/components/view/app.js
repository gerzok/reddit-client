import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import Home from './home.container';
import { getToken } from '../state/actions';

class RedditAppComp extends Component {
  componentDidMount() {
    const { getToken } = this.props;
    getToken();
  }

  render() {
    const { token } = this.props;
    return(
      <Suspense fallback={<h4>Loading app...</h4>}>
        {token && <Home />}
      </Suspense>
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