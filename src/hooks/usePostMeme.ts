import React from 'react';
import { getMemesResponse } from '../types/apiCallsTypes';

// TODO - Documentation needs to be added
export const usePostMeme = () => {
  const [data, setData] = React.useState<getMemesResponse>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/caption_image');
  }, []);

  return { data, loading, error };
};
