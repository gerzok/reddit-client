import { connect } from 'react-redux';
import RedditAppComp from './home.component';
import { getToken, getTopList } from '../state/actions';

const mapStateToProps = (state) => ({
  topList: state.topList,
  token: state.token
});

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(getToken()),
  getTopList: () => dispatch(getTopList())
});

const RedditApp = connect(mapStateToProps, mapDispatchToProps)(RedditAppComp);

export default RedditApp;