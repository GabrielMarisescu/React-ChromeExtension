import React from 'react';
import LoadingSpinner from '../../components/DumbComponents/LoadingSpinner';

function withMemeData(
  WrappedComponent: React.FC,
  loading: boolean,
  error: null
): React.FC {
  return function HOC(props: any) {
    const isDataLoaded = !error && !loading;

    return (
      <>{isDataLoaded ? <WrappedComponent {...props} /> : <LoadingSpinner />}</>
    );
  };
}
export default withMemeData;
