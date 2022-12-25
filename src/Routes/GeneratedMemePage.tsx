import { useAtom } from 'jotai';
import Button from '../components/DumbComponents/Button';
import MemeGeneratorHeader from '../components/DumbComponents/MemeGeneratorHeader';
import ShowcaseMemeImage from '../components/DumbComponents/ShowcaseMemeImage';
import {
  COPYTOCLIPBOARD,
  DOWNLOAD,
  GENERATEDMEME,
  VIEWINBROWSER,
} from '../constants';
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

const copyToClipboard = (data: string): void => {
  navigator.clipboard.writeText(data);
  //TODO If successful trigger pop up that it's  ok, for 2 seconds
};

const downloadData = (data: string) => {
  const DownloadOptions = { url: data };
  console.log(chrome);
};

function GeneratedMemePage({ data }: { data: string }) {
  return (
    //TODO : Maybe make a big version of showcasememeimage
    <>
      <MemeGeneratorHeader title={GENERATEDMEME} />
      <div className=' flex items-center'>
        <div className=' w-full'>
          <section className=' mt-5 flex justify-between mb-4'>
            <Button
              title={DOWNLOAD}
              onClick={() => downloadData(data)}
              className='mx-2'
            />
            <Button
              title={COPYTOCLIPBOARD}
              onClick={() => copyToClipboard(data)}
              className='mx-2'
            />
          </section>
          <ShowcaseMemeImage src={data} />
          <div className=' w-11/12  mx-auto mt-12 '>
            <a href={data} target={'_blank'}>
              <Button title={VIEWINBROWSER} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneratedMemePageWithData;
