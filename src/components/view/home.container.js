import { connect } from 'react-redux';
import HomeComp from './home.component';
import { getTopList, getPagination, nextPage, initialTopList, removeAllPosts, removeThisPost } from '../state/actions';

const mapStateToProps = (state) => ({
  topList: state.topList,
  token: state.token,
  pagination: state.pagination,
  totalPagination: state.totalPagination
});

const mapDispatchToProps = (dispatch) => ({
  getTopList: token => dispatch(getTopList(token)),
  getPagination: (token, pagination) => dispatch(getPagination(token, pagination)),
  nextPage: page => dispatch(nextPage(page)),
  initialTopList: () => dispatch(initialTopList()),
  removeAllPosts: () => dispatch(removeAllPosts()),
  removeThisPost: id => dispatch(removeThisPost(id))
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;