import { useAtom } from 'jotai';
import Button from '../components/DumbComponents/Button/Button';
import MemeGeneratorHeader from '../components/DumbComponents/MemeGeneratorHeader/MemeGeneratorHeader';
import ShowcaseMemeImage from '../components/DumbComponents/ShowcaseMemeImage/ShowcaseMemeImage';
import {
  COPYTOCLIPBOARD,
  DOWNLOAD,
  GENERATEDMEME,
  VIEWINBROWSER,
} from '../Constants';
import { template_ID } from '../MainStore';
import withMemeData from '../utils/HOCs/withMemeData';
import useDownloadMeme from '../utils/Hooks2/useDownloadMeme';
import { usePostMeme } from '../utils/Hooks2/usePostMeme';
import useUniqueFilename from '../utils/Hooks2/useUniqueFilename';

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

function GeneratedMemePage({ data }: { data: string }) {
  const fileName = useUniqueFilename();
  const downloadMeme = useDownloadMeme();
  return (
    <>
      <MemeGeneratorHeader title={GENERATEDMEME} />
      <div className=' flex items-center'>
        <div className=' w-full'>
          <section className=' mt-5 flex justify-between mb-4'>
            <Button
              title={DOWNLOAD}
              onClick={() => downloadMeme({ data, fileName })}
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
