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
const downloadMeme = (): void => {};

const copyToClipboard = (captionedURL: string): void => {
  navigator.clipboard.writeText(captionedURL);
  //TODO If successful trigger pop up that it's  ok, for 2 seconds
};

function GeneratedMemePage({ data }: { data: string }) {
  return (
    //TODO : Maybe make a big version of showcasememeimage
    <>
      <section className=' m-auto w-1/2 flex '>
        <Button title={DOWNLOAD} onClick={downloadMeme} />
        <Button title={COPYTOCLIPBOARD} onClick={() => copyToClipboard(data)} />
        <a href={data} type='image' target={'_blank'}>
          <Button title={VIEWINBROWSER} />
        </a>
        ;
        <ShowcaseMemeImage imageLink={data} />
      </section>
    </>
  );
}

export default GeneratedMemePageWithData;
