import { useAtom } from 'jotai';
import Button from '../components/DumbComponents/Button';
import ShowcaseMemeImage from '../components/DumbComponents/ShowcaseMemeImage';
import { COPYTOCLIPBOARD, DOWNLOAD, VIEWINBROWSER } from '../constants';
import { template_ID } from '../MainStore';
import withMemeData from '../utils/HOCs/withMemeData';
import { usePostMeme } from '../utils/hooks/usePostMeme';

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
const downloadMeme = () => {};

const copyToClipboard = (captionedURL: string) => {
  navigator.clipboard.writeText(captionedURL);
  //TODO If successful trigger pop up that it's  ok, for 2 seconds
};
const viewMemeInBrowser = () => {};

function GeneratedMemePage({ data }: { data: string }) {
  return (
    //TODO : Copy to clipboard, view in browser, download image
    //TODO : Maybe make a big version of showcasememeimage
    <>
      <Button title={DOWNLOAD} onClick={downloadMeme} />
      <Button title={COPYTOCLIPBOARD} onClick={() => copyToClipboard(data)} />
      <Button title={VIEWINBROWSER} onClick={viewMemeInBrowser} />
      <section className=' m-auto w-1/2 '>
        <ShowcaseMemeImage imageLink={data} />
      </section>
    </>
  );
}

export default GeneratedMemePageWithData;
