import React from 'react';
import Style from './style';
import favIcon from './listWithInfo-Assets/favorite.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';

const ListWithInfo = (props) => {
  const { image, name, created } = props.data;
  return (
    <>
      <Style.ListWrapper>
        <div>
          <Style.FavoriteIcon src={favIcon} />
        </div>
        <Style.List>
          <Style.ContentWrapper>
            <Avatar src={image} />
            <Style.Title>{name}</Style.Title>
            <Style.Aligner>
              <Style.Subtitle>
                {`Created at ${dataParser(created)}`}
              </Style.Subtitle>
            </Style.Aligner>
          </Style.ContentWrapper>
        </Style.List>
      </Style.ListWrapper>
    </>
  );
};

export default ListWithInfo;
