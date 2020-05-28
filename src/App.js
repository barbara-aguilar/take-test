import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import Navbar from './components/navbar';
import myLogo from './components/navbar/navbar-assets/logo.png';
import Home from './pages/home/home';
import Profile from './pages/profile/index';
import { FooterDiv } from './components/footer/footer';

function App() {
  return (
    <>
      <Container fluid>
        <Navbar logo={myLogo} />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Container fluid>
        <FooterDiv />
      </Container>
    </>
  );
}

export default App;
