import { useAtom } from 'jotai';
import React from 'react';
import ShowcaseMemeImage from '../components/DumbComponents/ShowcaseMemeImage';
import { template_ID } from '../MainStore';
import withMemeData from '../utils/HOCs/withMemeData';
import { usePostMeme } from '../utils/hooks/usePostMeme';

//TODO : LOAD IF IMAGE ISN'T THERE YET , SHOW LOADING SPINNER IF IMAGE ISN'T THERE YET,
//TODO : COMPONENT WILL TAKE IN A PROP THAT WILL BE THE IMAGE LINK

function GeneratedMemePageWithData() {
  const [data, _] = useAtom(template_ID);
  const { captionedURL, loading, error } = usePostMeme(data);
  const Component = withMemeData(
    GeneratedMemePage,
    loading,
    error,
    captionedURL
  );
  return <Component />;
}

//TODO make props type

function GeneratedMemePage({ data }: { data: string }) {
  return (
    //TODO : Copy to clipboard, view in browser, download image
    <>
      <div className=' text-gray-50'>GeneratedMemePage </div>
      <ShowcaseMemeImage imageLink={data} />
    </>
  );
}

export default GeneratedMemePageWithData;
