import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 22px;
  padding: 0 40px;
  hr {
    color: #808080;
    margin: 20px 0;
  }
`;

export const ProfileCard = styled.div`
  margin: 20px 40px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  padding: ${(props) => props.padding};
`;

export const WrapperFlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WrapperColumnRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #808080;
  font-weight: lighter;
  text-align: ${(props) => props.align};
`;

export const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 25px;
  width: 100%;
  color: #514f61;
  text-transform: capitalize;
  text-align: ${(props) => props.align};
`;

export const SmallSubtitle = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: bold;
  color: #808080;
  padding-top: 5px;
`;

export const InternContent = styled.div`
  padding: 10px;
`;

export const ColorDiv = styled.div`
  background-color: ${(props) => props.color};
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
