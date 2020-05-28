import styled from 'styled-components';

const Avatar = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: ${(props) => props.borderRadius};
`;

export default Avatar;
