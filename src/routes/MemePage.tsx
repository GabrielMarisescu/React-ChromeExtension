// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import ShowcaseMemeImage from '../components/DumbComponents/ShowcaseMemeImage/ShowcaseMemeImage';
import MemeGeneratorHeader from '../components/DumbComponents/MemeGeneratorHeader/MemeGeneratorHeader';
import ManageMemeButtons from '../components/ManageMemeButtons';
import { MemePageProps } from '../types/apiCallsTypes';
import withMemeData from '../utils/HOCs/withMemeData';
import DisplayMemeInputs from '../components/DisplayMemeInputs';
import { useGetMemes } from '../utils/Hooks/useGetMeme';
import { useAtom } from 'jotai';
import { template_ID } from '../MainStore';
import { MEME_GENERATOR } from '../Constants';

function MemePageWithData() {
  const { data, loading, error } = useGetMemes();
  const Component = withMemeData(MemePage, loading, error, data);
  return <Component />;
}

function MemePage({ data }: MemePageProps) {
  const [memeIndex, setMemeIndex] = React.useState<number>(0);
  const [_, setTemplateId] = useAtom(template_ID);
  const memeData = data.data;
  const memesLength = memeData.memes.length;

  const goToPreviousMeme = (): void => {
    setMemeIndex((memeIndex - 1 + memesLength) % memesLength);
  };
  const goToNextMeme = (): void => {
    setMemeIndex((memeIndex + 1) % memesLength);
  };

  useEffect(() => {
    setTemplateId(memeData.memes[memeIndex].id);
  }, [memeIndex, memeData]);

  useEffect(() => {
    setMemeIndex(Math.floor(Math.random() * data.data.memes.length));
  }, []);

  return (
    <>
      <MemeGeneratorHeader title={MEME_GENERATOR} />
      <ManageMemeButtons
        goToPreviousMeme={goToPreviousMeme}
        goToNextMeme={goToNextMeme}
      />
      <ShowcaseMemeImage
        src={memeData.memes[memeIndex].url}
        alt={memeData.memes[memeIndex].id}
      />
      <DisplayMemeInputs
        numberOfBoxesToCaption={memeData.memes[memeIndex].box_count}
      />
    </>
  );
}

export default MemePageWithData;
