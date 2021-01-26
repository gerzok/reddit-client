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
                        return(
                          <Card key={index}>
                            <Card.Img variant="top" src={el.data.url} />
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