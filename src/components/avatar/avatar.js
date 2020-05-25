import React from 'react';
import Style from './style';

const Avatar = (path, size) => {
  return <Style.Avatar src={path} size={size} alt="user-photo" />;
};

export default Avatar;
