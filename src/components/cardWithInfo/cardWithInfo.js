import React from 'react';
import data from '../../data/data.json';
import Style from './style';
import favIcon from './cardWithInfo-Assets/star.png';
import Avatar from '../avatar/style';
import moment from 'moment';

let myData = data.map((item) => {
  return (
    <>
      <Style.Card>
        <div>
          <Style.FavoriteIcon src={favIcon} />
        </div>
        <Style.ContentWrapper>
          <Avatar src={item.image} />
          <Style.Title>
            {item.shortName.toString().replace('_', ' ').toLowerCase()}
          </Style.Title>
          <Style.Subtitle>
            {`Created at ${moment(item.created).format('DD/MM/YYYY')}`}
          </Style.Subtitle>
        </Style.ContentWrapper>
      </Style.Card>
    </>
  );
});

const CardWithInfo = () => {
  return <Style.CardWrapper>{myData}</Style.CardWrapper>;
};

export default CardWithInfo;
