import React, { Component, Suspense } from 'react';

class HomeComp extends Component {
  componentDidMount() {
    const { getTopList, token: { access_token } } = this.props;
    getTopList(access_token);
  }

  render() {
    const { topList } = this.props;
    return(
      <Suspense>
        {topList && (
          <div>
            <h1>Reddit Client</h1>
          </div>
        )}
      </Suspense>
    );
  };
}

export default HomeComp;