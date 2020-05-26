import React, { useState, useEffect } from 'react';
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
import data from './data/data.json';

function App() {
  const [viewMode, setViewMode] = useState({ cardMode: true });

  function activeCardView(selectedMode) {
    if (selectedMode !== viewMode.cardMode) {
      setViewMode({ cardMode: !viewMode.cardMode });
    }
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(data);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = data.filter((item) =>
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
    // eslint-disable-next-line
  }, [sortParameter]);

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
              <Input
                placeholder="Search"
                onChange={handleChange}
                value={searchTerm}
              />
              <Button onClick={() => setSortParameter('name')}>
                Order by name
              </Button>
              <Button onClick={() => setSortParameter('date')}>
                Order by creation
              </Button>
            </Col>
            <Col lg={1} md={1} sm={2}>
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
        </div>
      </Container>
      <Container>
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
      </Container>
    </>
  );
}

export default App;
