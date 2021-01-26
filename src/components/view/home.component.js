import React, { Component, Fragment } from 'react';
import { Spinner, Container, Row, Col, Card } from 'react-bootstrap';

import './scss/home.scss';
import Logo from '../../../public/images/reddit-logo.png';

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
            <div className="wp-container">
              <Container className="header" fluid>
                <Row>
                  <Col className="logo">
                    <img src={Logo} className="img-fluid" alt="Reddit Logo" />
                  </Col>
                </Row>
              </Container>
              
              <div className="main-container">
                <Container className="main">
                  <Row>
                    <Col>
                      {children.map((el, index) => {
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
                          <Card key={index}>
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
                          </Card>
                        );
                      })}
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          )}
        </Fragment>
    );
  };
}

export default HomeComp;