import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Layout from '../layouts/index';
const Home = () => {
  return (
    <Layout>
      <div className="content pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-red-400">
                <h2>ONE</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-pink-400">
                <h2>TWO</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-red-500">
                <h2>THREE</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-pink-400">
                <h2>FOUR</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-pink-500">
                <h2>FIVE</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single p-2 mb-2 bg-red-400">
                <h2>SIX</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
