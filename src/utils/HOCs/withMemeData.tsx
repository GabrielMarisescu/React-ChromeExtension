import React from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

function withMemeData(
  WrappedComponent: React.FC,
  loading: boolean,
  error: null
): React.FC {
  return function HOC(props: any) {
    const isDataLoaded = !error && !loading;

    //TODO Make spinner for loading
    return (
      <>{isDataLoaded ? <WrappedComponent {...props} /> : <LoadingSpinner />}</>
    );
  };
}
export default withMemeData;
