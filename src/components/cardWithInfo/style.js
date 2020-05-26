import styled from 'styled-components';

const Card = styled.div`
  margin: 15px;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: center;
`;

const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  color: #808080;
  text-align: center;
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
  Card,
  ContentWrapper,
  Title,
  Subtitle,
  FavoriteIcon,
  Aligner,
};
