import { connect } from 'react-redux';
import HomeComp from './home.component';
import { getTopList } from '../state/actions';

const mapStateToProps = (state) => ({
  topList: state.topList,
  token: state.token
});

const mapDispatchToProps = (dispatch) => ({
  getTopList: token => dispatch(getTopList(token))
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;