import React from 'react';
import {Image as ImageExpo, ImageProps} from 'expo-image';

const Image = (props: ImageProps) => {
  return (
    <>
      <ImageExpo {...props} />
    </>
  );
};

export default Image;
