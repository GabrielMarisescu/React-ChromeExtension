import React, { useState } from 'react';
import LoadingSpinner from '../../components/DumbComponents/LoadingSpinner';
import { getMemesResponse } from '../../types/apiCallsTypes';
import { useGetMemes } from '../hooks/useGetMeme';

function withMemeData(WrappedComponent: any): React.FC {
  const { loading, error, data } = useGetMemes();

  return function HOC(props: any): JSX.Element {
    const isDataLoaded = data && !error && !loading;

    return (
      <>
        {isDataLoaded ? (
          <WrappedComponent {...props} data={data} />
        ) : (
          <LoadingSpinner />
        )}
      </>
    );
  };
}
export default withMemeData;
