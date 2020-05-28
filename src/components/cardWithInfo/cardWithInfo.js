import React from 'react';
import Style from './style';
import favIcon from './cardWithInfo-Assets/favorite.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';
import { Link, Route } from 'react-router-dom';
import Profile from '../../pages/profile/profile';

const CardWithInfo = (props) => {
  const { image, name, created, shortName } = props.data;
  return (
    <Style.Card>
      <div>
        <Style.FavoriteIcon src={favIcon} />
      </div>
      <Link to={{ pathname: '/profile/' + shortName }}>
        <Style.ContentWrapper>
          <Avatar src={image} />
          <Style.Title>{name}</Style.Title>
          <Style.Subtitle>{`Created at ${dataParser(created)}`}</Style.Subtitle>
        </Style.ContentWrapper>
      </Link>
    </Style.Card>
  );
};

export default CardWithInfo;
