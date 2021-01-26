import { connect } from 'react-redux';
import HomeComp from './home.component';
import { getTopList, getPagination, nextPage, initialTopList, removeAllPost } from '../state/actions';

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
  removeAllPost: () => dispatch(removeAllPost())
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComp);

export default Home;