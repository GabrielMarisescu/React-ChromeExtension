import { useGetMemes } from './utils/hooks/useGetMeme';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import ShowcaseMemeImage from './components/ShowcaseMemeImage';
import MemeGeneratorHeader from './components/DumbComponents/MemeGeneratorHeader';
import ManageMemeButtons from './components/ManageMemeButtons';
import { getMemesResponse } from './types/apiCallsTypes';
import withMemeData from './utils/HOCs/withMemeData';
import DisplayMemeInputs from './components/DisplayMemeInputs';

function AppWithData() {
  const { loading, error } = useGetMemes();
  const Component = withMemeData(App, loading, error);
  return <Component />;
}

function App() {
  const [meme, setMeme] = React.useState<getMemesResponse>();
  const [memeIndex, setMemeIndex] = React.useState<number>(0);
  const { data } = useGetMemes();
  const memesLength = meme?.data.memes.length;

  React.useEffect(() => {
    if (data) {
      setMeme(data);
    }
  }, [data]);

  const goToPreviousMeme = (): void => {
    setMemeIndex((prevData) =>
      prevData - 1 < 0 ? memesLength! - 1 : prevData - 1
    );
  };
  const goToNextMeme = (): void => {
    setMemeIndex((prevData) =>
      prevData + 1 > memesLength! - 1 ? 0 : prevData + 1
    );
  };

  console.log(data);
  return (
    <>
      <MemeGeneratorHeader />
      <ManageMemeButtons
        goToPreviousMeme={goToPreviousMeme}
        goToNextMeme={goToNextMeme}
        disabledGenerate={false}
      />
      <ShowcaseMemeImage
        imageLink={meme?.data.memes[memeIndex].url}
        altValue={meme?.data.memes[memeIndex].id}
      />
      <DisplayMemeInputs
        numberOfBoxesToCaption={meme?.data.memes[memeIndex].box_count}
      />
    </>
  );
}

export default AppWithData;
