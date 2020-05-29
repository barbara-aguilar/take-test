import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Input from '../../components/input/style';
import Title from '../../components/title/style';
import Button from '../../components/button/style';
import listView from '../../components/toggleButton/toogleButtonAssets/listView.png';
import cardView from '../../components/toggleButton/toogleButtonAssets/cardView.png';
import ToggleButton from '../../components/toggleButton/style';
import ListWithInfo from '../../components/listWithInfo/listWithInfo';
import CardWithInfo from '../../components/cardWithInfo/cardWithInfo';
import { Wrapper } from '../../pages/profile/style';
import data from '../../data/data.json';

const dataApp = data.map((item) => ({
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

function Home() {
  const [viewMode, setViewMode] = useState({ cardMode: true });

  function activeCardView(selectedMode) {
    if (selectedMode !== viewMode.cardMode) {
      setViewMode({ cardMode: !viewMode.cardMode });
    }
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(dataApp);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = dataApp.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const [sortParameter, setSortParameter] = useState('');
  useEffect(() => {
    const sortResultsBy = () => {
      const sorted = [...searchResults].sort((a, b) => {
        let A, B;
        if (sortParameter === 'name') {
          A = a.name;
          B = b.name;
        }
        if (sortParameter === 'date') {
          A = a.created;
          B = b.created;
        }
        if (A < B) {
          return -1;
        }
        if (A > B) {
          return 1;
        }
        return 0;
      });
      setSearchResults(sorted);
    };
    sortResultsBy(sortParameter);
  }, [sortParameter]);

  return (
    <>
      <Container>
        <Wrapper>
          <Row alignItems="center" justifyContent="between">
            <Col lg={3} md={3} sm={2}>
              <Title>My chatbots</Title>
            </Col>
            <Col lg={3} md={2} sm={2}>
              <Input
                placeholder="Search"
                onChange={handleChange}
                value={searchTerm}
              />
            </Col>
            <Col lg={2} md={2}>
              <Button onClick={() => setSortParameter('name')}>
                Order by name
              </Button>
            </Col>
            <Col lg={2} md={2}>
              <Button onClick={() => setSortParameter('date')}>
                Order by creation
              </Button>
            </Col>
            <Col lg={2} md={2} hiddenSmDown>
              <ToggleButton
                onClick={() => activeCardView(true)}
                src={cardView}
                alt="card view"
              />
              <ToggleButton
                onClick={() => activeCardView(false)}
                src={listView}
                alt="list view"
              />
            </Col>
          </Row>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper>
          <hr />
        </Wrapper>
        <Row></Row>
      </Container>
      <Container>
        <Wrapper>
          <Row alignItems="center" justifyContent="around">
            {searchResults.map((item) =>
              viewMode.cardMode ? (
                <CardWithInfo data={item} />
              ) : (
                <Col>
                  <ListWithInfo data={item} />
                </Col>
              )
            )}
          </Row>
        </Wrapper>
      </Container>
    </>
  );
}

export default Home;
