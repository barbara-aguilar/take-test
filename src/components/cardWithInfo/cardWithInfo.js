import React from 'react';
import Style from './style';
import favIcon from './cardWithInfo-Assets/star.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';

const CardWithInfo = (props) => {
  const { image, name, created } = props.data;
  return (
    <Style.Card>
      <div>
        <Style.FavoriteIcon src={favIcon} />
      </div>
      <Style.ContentWrapper>
        <Avatar src={image} />
        <Style.Title>{name}</Style.Title>
        <Style.Subtitle>{`Created at ${dataParser(created)}`}</Style.Subtitle>
      </Style.ContentWrapper>
    </Style.Card>
  );
};

export default CardWithInfo;
