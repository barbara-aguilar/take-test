import React from 'react';
import Style from './style';
import favIcon from './listWithInfo-Assets/favorite.png';
import Avatar from '../avatar/style';
import dataParser from '../../util/dateParser';
import { Link } from 'react-router-dom';

const ListWithInfo = (props) => {
  const { image, name, created, shortName } = props.data;
  return (
    <>
      <Style.ListWrapper>
        <div>
          <Style.FavoriteIcon src={favIcon} />
        </div>
        <Style.List>
          <Link to={'/profile/' + shortName}>
            <Style.ContentWrapper>
              <Avatar src={image} size="35px" borderRadius="50px" />
              <Style.Title>{name}</Style.Title>
              <Style.Aligner>
                <Style.Subtitle>
                  {`Created at ${dataParser(created)}`}
                </Style.Subtitle>
              </Style.Aligner>
            </Style.ContentWrapper>
          </Link>
        </Style.List>
      </Style.ListWrapper>
    </>
  );
};

export default ListWithInfo;
