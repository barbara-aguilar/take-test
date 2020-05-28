import React from 'react';
import Style from './style';

const Avatar = (path, size, borderRadius) => {
  return (
    <Style.Avatar
      src={path}
      size={size}
      borderRadius={borderRadius}
      alt="user-photo"
    />
  );
};

export default Avatar;
