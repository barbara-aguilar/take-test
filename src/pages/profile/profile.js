import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { ProfileCard, Wrapper } from './style';
import imageUrl from './profile-assets/plano.png';

const Profile = () => {
  return (
    <>
      <Container fluid>
        <Wrapper>
          <Row justifyContent="around" alignItems="center">
            <Col lg={8} md={8}>
              <Row>
                <Col lg={4} md={4}>
                  <ProfileCard>oi</ProfileCard>
                </Col>
                <Col lg={8} md={8}>
                  <ProfileCard>oi</ProfileCard>
                </Col>
              </Row>
              <Row justifyContent="around" alignItems="center">
                <Col lg={8} md={8}>
                  <ProfileCard>oi</ProfileCard>
                </Col>
                <Col lg={4} md={4}>
                  <ProfileCard>oi</ProfileCard>
                </Col>
              </Row>
            </Col>
            <Col lg={2} md={2}>
              <img src={imageUrl} alt="illustration" />
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;
