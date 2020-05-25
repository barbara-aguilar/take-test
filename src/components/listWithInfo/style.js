import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.div`
  margin: 15px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  width: 15%;
  padding-left: 15px;
  color: #808080;
  text-align: left;
  text-transform: capitalize;
`;

const Subtitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #808080;
  font-weight: lighter;
`;

const FavoriteIcon = styled.img`
  padding: 5px;
  width: 30px;
  height: 30px;
`;

const Aligner = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 10px;
`;

export default {
  List,
  ListWrapper,
  ContentWrapper,
  Title,
  Subtitle,
  FavoriteIcon,
  Aligner,
};
