import React from 'react';
import Style from './style';
import starUnselected from './cardWithInfo-Assets/favorite.png';
import starSelected from './cardWithInfo-Assets/star.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';
import { Link } from 'react-router-dom';

const CardWithInfo = (props) => {
  const { image, name, created, shortName, isFavorite } = props.data;
  return (
    <Style.Card>
      <div>
        <Style.FavoriteIcon src={isFavorite ? starSelected : starUnselected} />
      </div>
      <Link to={'/profile/' + shortName}>
        <Style.ContentWrapper>
          <Avatar src={image} size="50px" borderRadius="50px" />
          <Style.Title>{name}</Style.Title>
          <Style.Subtitle>{`Created at ${dataParser(created)}`}</Style.Subtitle>
        </Style.ContentWrapper>
      </Link>
    </Style.Card>
  );
};

export default CardWithInfo;
