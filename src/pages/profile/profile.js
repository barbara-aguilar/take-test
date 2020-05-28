import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { useParams } from 'react-router';
import { Footer } from '../../components/footer/footer';
import Avatar from '../../components/avatar/style';
import Button from '../../components/button/style';
import imageUrl from './profile-assets/plano.png';
import userLogo from './profile-assets/user.png';
import unionLogo from './profile-assets/union.png';
import sentLogo from './profile-assets/sent.png';
import dataParser from '../../util/dateParser';
import data from '../../data/data.json';
import {
  ProfileCard,
  Wrapper,
  WrapperFlexRow,
  WrapperColumnRow,
  Subtitle,
  Title,
  SmallSubtitle,
  InternContent,
  ColorDiv,
} from './style';

const Profile = () => {
  const { shortName } = useParams();
  const { culture, plan, analytics, name, image, created } = data.find(
    (item) => item.shortName === shortName
  );
  return (
    <>
      <Container fluid>
        <Wrapper>
          <Row justifyContent="around" alignItems="center">
            <Col lg={4} md={4} alignSelf="center">
              <WrapperFlexRow>
                <Avatar src={image} size="50px" borderRadius="50px" />
                <Col alignSelf="center">
                  <Title>{name}</Title>
                  <Subtitle align="left">id:{shortName}</Subtitle>
                </Col>
              </WrapperFlexRow>
            </Col>
            <Col lg={8} md={8} alignSelf="center">
              <Subtitle align="right">
                {`Created at ${dataParser(created)}`}
              </Subtitle>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper>
          <hr />
        </Wrapper>
        <Wrapper>
          <Row justifyContent="around" alignItems="center">
            <Col lg={8} md={8}>
              <Row>
                <Col lg={4} md={4}>
                  <ProfileCard padding="40px">
                    <InternContent>
                      <SmallSubtitle>Region and idiom</SmallSubtitle>
                      <SmallSubtitle>{culture}</SmallSubtitle>
                    </InternContent>
                    <InternContent>
                      <SmallSubtitle>Timezone</SmallSubtitle>
                      <SmallSubtitle>(UTC - 03:00) Brasília</SmallSubtitle>
                    </InternContent>
                  </ProfileCard>
                </Col>
                <Col lg={8} md={8}>
                  <ProfileCard padding="60px">
                    <WrapperFlexRow>
                      <ColorDiv color="#287ef4">
                        <Avatar src={userLogo} size="30px" borderRadius="0" />
                      </ColorDiv>
                      <InternContent>
                        <Title>{analytics.user.actived}</Title>
                        <Subtitle>Usuários ativos</Subtitle>
                      </InternContent>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
              </Row>
              <Row justifyContent="around" alignItems="center">
                <Col lg={8} md={8}>
                  <ProfileCard padding="60px">
                    <WrapperFlexRow>
                      <ColorDiv color="#2bae44">
                        <Avatar src={unionLogo} size="30px" borderRadius="0" />
                      </ColorDiv>
                      <InternContent>
                        <Title>{analytics.message.received}</Title>
                        <Subtitle>Mensagens recebida</Subtitle>
                      </InternContent>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
                <Col lg={4} md={4}>
                  <ProfileCard padding="60px 40px">
                    <WrapperFlexRow>
                      <ColorDiv color="#2b5cae">
                        <Avatar src={sentLogo} size="30px" borderRadius="0" />
                      </ColorDiv>
                      <InternContent>
                        <Title>{analytics.message.sent}</Title>
                        <Subtitle>Mensagens enviadas</Subtitle>
                      </InternContent>
                    </WrapperFlexRow>
                  </ProfileCard>
                </Col>
              </Row>
            </Col>
            <Col lg={3} md={3}>
              <WrapperColumnRow>
                <img src={imageUrl} alt="illustration" />
                <InternContent>
                  <Subtitle>Account status</Subtitle>
                  <Title align="center">
                    {plan === 'standard' ? 'free' : plan}
                  </Title>
                </InternContent>
                <Button>Update account</Button>
              </WrapperColumnRow>
            </Col>
          </Row>
        </Wrapper>
        <Container fluid>
          <Footer />
        </Container>
      </Container>
    </>
  );
};

export default Profile;
