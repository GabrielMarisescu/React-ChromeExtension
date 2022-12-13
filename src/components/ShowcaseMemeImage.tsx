import React from 'react';
import { ShowCaseMemeImageProps } from '../types/apiCallsTypes';

function ShowcaseMemeImage({ imageLink }: ShowCaseMemeImageProps) {
  return (
    <img
      src={imageLink}
      alt='Drake Hotline Bling'
      className={' flex justify-center h-72 w-72 ml-auto mr-auto mt-5'}
    />
  );
}

//TODO Alt prop should be dynamic

export default ShowcaseMemeImage;
