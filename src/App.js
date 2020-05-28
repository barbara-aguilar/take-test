import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'styled-bootstrap-grid';
import Navbar from './components/navbar';
import myLogo from './components/navbar/navbar-assets/logo.png';
import Home from './pages/home/home';
import Profile from './pages/profile/index';
import data from './data/data.json';

const dataMaped = data.map((item) => ({
  shortName: item.shortName,
  name: item.name,
  image: item.image,
  userActived: item.analytics.user.actived,
  messagesSent: item.analytics.message.sent,
  messagesReceived: item.analytics.message.received,
  culture: item.culture,
  plan: item.plan,
  created: item.created,
  isFavorite: false,
}));

function App() {
  const [dataApp, setDataApp] = useState(dataMaped);

  console.log(dataApp);

  return (
    <>
      <Container fluid>
        <Navbar logo={myLogo} />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:shortName" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
