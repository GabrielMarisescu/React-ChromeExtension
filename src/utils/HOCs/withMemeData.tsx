import React from 'react';

function withMemeData(
  WrappedComponent: React.FC,
  loading: boolean,
  error: null
): React.FC {
  return function HOC(props: any) {
    const isDataLoaded = !error && !loading;

    //TODO Make spinner for loading
    return (
      <>
        {isDataLoaded ? (
          <WrappedComponent {...props} />
        ) : (
          <div>Something went wrong</div>
        )}
      </>
    );
  };
}
export default withMemeData;
