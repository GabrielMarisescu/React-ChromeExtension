import React from 'react';
import { GetMemesResponse } from '../../types/apiCallsTypes';

// TODO - Documentation needs to be added
export const useGetMemes = () => {
  const [data, setData] = React.useState<GetMemesResponse>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};
