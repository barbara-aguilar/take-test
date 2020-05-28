import React from 'react';
import Style from './style';
import favIcon from './cardWithInfo-Assets/favorite.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';
import { Link } from 'react-router-dom';

const CardWithInfo = (props) => {
  const { image, name, created } = props.data;
  return (
    <Style.Card>
      <div>
        <Style.FavoriteIcon src={favIcon} />
      </div>
      <Link to="/profile">
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
