import React from 'react';
import { ShowCaseMemeImageProps } from '../types/apiCallsTypes';

function ShowcaseMemeImage({ imageLink, altValue }: ShowCaseMemeImageProps) {
  return (
    <img
      src={imageLink}
      alt={altValue}
      className={
        ' flex justify-center h-72 w-72 ml-auto mr-auto mt-5 object-contain'
      }
    />
  );
}

//TODO Alt prop should be dynamic

export default ShowcaseMemeImage;
