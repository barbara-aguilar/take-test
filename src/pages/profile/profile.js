import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import {
  ProfileCard,
  Wrapper,
  WrapperFlexRow,
  WrapperColumnRow,
} from './style';
import Avatar from '../../components/avatar/style';
import Button from '../../components/button/style';
import imageUrl from './profile-assets/plano.png';
import userLogo from './profile-assets/user.png';
import unionLogo from './profile-assets/union.png';
import sentLogo from './profile-assets/sent.png';

const Profile = () => {
  return (
    <>
      <Container fluid>
        <Wrapper>
          <Row justifyContent="around" alignItems="center">
            <Col lg={8} md={8}>
              <Row>
                <Col lg={4} md={4}>
                  <ProfileCard>
                    <div>
                      <p>Region and Idiom</p>
                      <p>item.culture</p>
                    </div>
                    <div>
                      <p>Timezone</p>
                      <p>(UTC - 03:00) Brasília</p>
                    </div>
                  </ProfileCard>
                </Col>
                <Col lg={8} md={8}>
                  <ProfileCard>
                    <WrapperFlexRow>
                      <div>
                        <Avatar src={userLogo} />
                      </div>
                      <div>
                        <h4>item.user.active</h4>
                        <p>Usuários Ativos</p>
                      </div>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
              </Row>
              <Row justifyContent="around" alignItems="center">
                <Col lg={8} md={8}>
                  <ProfileCard>
                    <WrapperFlexRow>
                      <div>
                        <Avatar src={unionLogo} />
                      </div>
                      <div>
                        <h4>item.message.received</h4>
                        <p>Mensagem recebidas</p>
                      </div>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
                <Col lg={4} md={4}>
                  <ProfileCard>
                    <WrapperFlexRow>
                      <div>
                        <Avatar src={sentLogo} />
                      </div>
                      <div>
                        <h4>item.message.sent</h4>
                        <p>Mensagens enviadas</p>
                      </div>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3}>
              <WrapperColumnRow>
                <img src={imageUrl} alt="illustration" />
                <div>
                  <p>Account status</p>
                  <h4>item.plan</h4>
                </div>
                <Button>Update account</Button>
              </WrapperColumnRow>
            </Col>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Profile;
