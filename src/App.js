import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import Navbar from './components/navbar';
import myLogo from './components/navbar/navbar-assets/logo.png';
import Home from './pages/home/home';
import Profile from './pages/profile/index';
import data from './data/data.json';

function App() {
  return (
    <>
      <Container fluid>
        <Navbar logo={myLogo} />
      </Container>

      <Route exact path="/" component={Home} />
      {/* <Route path="/profile:id" component={Profile} /> */}
    </>
  );
}

export default App;
