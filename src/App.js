import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Navbar from './components/navbar';
import Input from './components/input/style';
import myLogo from './components/navbar/navbar-assets/logo.png';
import Title from './components/title/style';
import Button from './components/button/style';
import listView from './components/toggleButton/toogleButtonAssets/listView.png';
import cardView from './components/toggleButton/toogleButtonAssets/cardView.png';
import ToggleButton from './components/toggleButton/style';
import ListWithInfo from './components/listWithInfo/listWithInfo';
import CardWithInfo from './components/cardWithInfo/cardWithInfo';

function App() {
  return (
    <>
      <Container fluid>
        <Navbar logo={myLogo} />
      </Container>
      <Container>
        <div>
          <Row alignItems="center" justifyContent="between">
            <Col lg={4} md={4} sm={12}>
              <Title>My chatbots</Title>
            </Col>
            <Col lg={7} md={7} sm={8}>
              <Input placeholder="Search" />
              <Button>Order by name</Button>
              <Button>Order by creation</Button>
            </Col>
            <Col lg={1} md={1} sm={2}>
              <ToggleButton src={cardView} alt="card view" />
              <ToggleButton src={listView} alt="list view" />
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col>
            <ListWithInfo />
          </Col>
          <Row alignItems="center" justifyContent="between">
            <Col>
              <CardWithInfo />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default App;
