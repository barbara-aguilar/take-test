import React from 'react';
import data from '../../data/data.json';
import Style from './style';
import favIcon from './listWithInfo-Assets/star.png';
import Avatar from '../avatar/style';
import moment from 'moment';

let myData = data.map((item) => {
  return (
    <>
      <Style.ListWrapper>
        <div>
          <Style.FavoriteIcon src={favIcon} />
        </div>
        <Style.List>
          <Style.ContentWrapper>
            <Avatar src={item.image} />
            <Style.Title>
              {item.shortName.toString().replace('_', ' ').toLowerCase()}
            </Style.Title>
            <Style.Aligner>
              <Style.Subtitle>
                {`Created at ${moment(item.created).format('DD/MM/YYYY')}`}
              </Style.Subtitle>
            </Style.Aligner>
          </Style.ContentWrapper>
        </Style.List>
      </Style.ListWrapper>
    </>
  );
});

const ListWithInfo = () => {
  return <div>{myData}</div>;
};

export default ListWithInfo;
