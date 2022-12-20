import React  from 'react';
import LoadingSpinner from '../../components/DumbComponents/LoadingSpinner';

function withMemeData(
  WrappedComponent: React.ComponentType<any>,
  loading: boolean,
  error: null,
  data: any
): React.FC {
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
