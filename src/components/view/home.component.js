import React, { Component, Fragment } from 'react';
import { Spinner, Container, Row, Col, Card, Pagination, Toast, Button } from 'react-bootstrap';

import './scss/home.scss';
import Logo from '../../../public/images/reddit-logo.png';

class HomeComp extends Component {
  state = {
    initialPagination: true,
    currentPage: 0,
    isOpen: false,
    removePost: null
  }
  componentDidMount() {
    const { getTopList, token: { access_token } } = this.props;
    getTopList(access_token);
  }

  componentDidUpdate(prevProps) {
    const { getPagination, totalPagination, token: { access_token }, topList, topList: { data: { after } } } = this.props;
    const { initialPagination } = this.state;
  
    if (topList !== prevProps.topList && initialPagination) {
      for(let i=1;i<=totalPagination;i++) {
        getPagination(access_token, after);
        this.setState({ initialPagination: false });
      }
    }
  }

  handlePagination(page) {
    const { nextPage } = this.props;
    nextPage(page);
    this.scrollToTop();
    this.setState({ currentPage: page+1 });
  }

  handleTopList() {
    const { initialTopList } = this.props;
    initialTopList();
    this.scrollToTop();
    this.setState({ currentPage: 0 });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  toggleToast() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleRemoveAllPost() {
    const { removeAllPosts } = this.props;
    this.setState({ removePost: 'All' });
    setTimeout(() => {
      removeAllPosts();
      this.setState({ removePost: null });
    }, 1000);
  }

  handleRemoveThisPost(e, id) {
    const { removeThisPost } = this.props;
    this.setState({ removePost: id });
    setTimeout(() => {
      removeThisPost(id);
      this.setState({ removePost: null });
    }, 1000);
  }

  render() {
    const { topList, pagination } = this.props;
    const { data = { children: null } } = topList;
    const { children } = data;
    const { isOpen, removePost } = this.state;

    return(
        <Fragment>
          {!children ? (
            <Fragment>
              <Spinner animation="border" variant="secondary" /> <span>Loading...</span>
            </Fragment>
          ) : (
            <div className="wp-container">
              <Container className="header" fluid>
                <Row>
                  <Col className="logo">
                    <img src={Logo} className="img-fluid" alt="Reddit Logo" />
                  </Col>
                  <Col className="btn-actions">
                    <Button variant="danger" size="sm" onClick={this.handleRemoveAllPost.bind(this)}>Remove All Posts</Button>
                  </Col>
                </Row>
              </Container>
              
              <div className="main-container">
                <Container className="main">
                  <Row>
                    <Col>
                      {children.length > 0 && children.map((el, index) => {
                        const { 
                          title,
                          url,
                          author,
                          created_utc: created,
                          thumbnail: defaultThumb,
                          num_comments: comments,
                        } = el.data;
                        const { readStatus } = el;
                        const currentDate = new Date();
                        const createdOn = new Date(created * 1000);
                        const difference = (currentDate - createdOn)/36e5;
                        const hoursAgo = Math.round(difference);
                        const thumbnail = url.match(/\.(jpg|png|gif)\b/) ? url : defaultThumb;

                        return(
                          <Card key={index} className={index === removePost || removePost === 'All' ? 'hide' : 'show'}>
                            <div className="left-side-bar">
                              <div className="dismiss-post" onClick={e => this.handleRemoveThisPost(e, index)}>&#10006;</div>
                            </div>
                            <div className="card-content">
                              <Card.Header>
                                <div className="post-details">
                                  <div className="author-date">{`Posted by ${author} ${hoursAgo} hours ago`}</div>
                                </div>
                                <h4>{title}</h4>
                              </Card.Header>
                              <Card.Body>
                                <Card.Img variant="top" src={thumbnail} />
                              </Card.Body>
                              <Card.Footer>
                                <div className="post-footer">
                                  <div className="comments-status">
                                    &#9998; {`${comments} Comments | ${readStatus}`}
                                  </div>
                                </div>
                              </Card.Footer>
                            </div>
                          </Card>
                        );
                      })}
                      {!children.length && <h6>All posts have been removed...</h6>}
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pagination-container">
                    <Pagination>
                      {children.length > 0 && pagination.length > 0 && pagination.map((item, index) => {
                        const { currentPage } = this.state;

                        if(index===0) {
                          return (
                            <Fragment>
                              {!currentPage ? (
                                  <Fragment>
                                    <Pagination.Item key={index+1} disabled>{index+1}</Pagination.Item>
                                    <Pagination.Item key={index+2} onClick={() => this.handlePagination(index)}>{index+2}</Pagination.Item>
                                  </Fragment>
                                ) : (
                                  <Fragment>
                                    <Pagination.Item key={index+1} onClick={() => this.handleTopList(index)}>{index+1}</Pagination.Item>
                                    <Pagination.Item key={index+2} disabled>{index+2}</Pagination.Item>
                                  </Fragment>
                                )
                              }
                            </Fragment>
                          );
                        }
                      })}
                      {children.length > 0 && <Pagination.Last onClick={this.toggleToast.bind(this)} />}
                    </Pagination>
                    </Col>
                  </Row>
                </Container>

                <Toast show={isOpen} onClose={this.toggleToast.bind(this)}>
                  <Toast.Header>
                    <strong className="mr-auto">Sorry...</strong>
                  </Toast.Header>
                  <Toast.Body>This feature is still in development</Toast.Body>
                </Toast>
              </div>
            </div>
          )}
        </Fragment>
    );
  };
}

export default HomeComp;