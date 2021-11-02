import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Person from '../components/person';
import Layout from '../layouts/index';
const Home = () => {
  const PersonList = [
    {
      pic: 'https://picsum.photos/id/237/400/300',
      name: 'First',
      description: 'This is the first item',
    },
    {
      pic: 'https://picsum.photos/400/300?grayscale',
      name: 'Second',
      description: 'This is the second item',
    },
    {
      pic: 'https://picsum.photos/seed/picsum/400/300',
      name: 'Third',
      description: 'This is the third item',
    },
  ];
  return (
    <Layout>
      <div className="content pt-5 pb-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h2>Home Page</h2>
            </Col>
          </Row>
          <Row>
            <Person persons={PersonList} />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
