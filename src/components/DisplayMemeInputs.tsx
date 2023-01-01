import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { inputBoxesValues } from '../MainStore';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import Button from './DumbComponents/Button';
import { GENERATE, NAVIGATEGENERATED } from '../constants';

interface DisplayMemeInputsProps {
  numberOfBoxesToCaption: number;
}

function DisplayMemeInputs({
  numberOfBoxesToCaption,
}: DisplayMemeInputsProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputBoxes, setInputBoxes] = useAtom(inputBoxesValues);
  const arrayOfBoxes: string[] = Array(numberOfBoxesToCaption).fill('');
  const navigate = useNavigate();

  const useFormDataAndNavigate = (data: { [key: string]: string }) => {
    //refactor as hook maybe
    const inputBoxesArray = Object.values(data);
    setInputBoxes(inputBoxesArray);
    //const as string here
    navigate(NAVIGATEGENERATED);
  };

  useEffect(() => {
    arrayOfBoxes.length !== inputBoxes.length
      ? setInputBoxes(arrayOfBoxes)
      : null;
  }, [numberOfBoxesToCaption, inputBoxes]);

  const onSubmit = (data: any) => {
    useFormDataAndNavigate(data);
    //zod validation
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        {inputBoxes.map((_, i) => (
          <input
            {...register(`memeInput${i}`)}
            type='text'
            autoComplete='off'
            placeholder='Meme Caption'
            className=' placeholder:text-white border-blue-500 self-center my-1 w-4/5 h-10 border-2 text-white bg-transparent px-5 pr-16 rounded-lg focus:outline-none'
          />
        ))}
        <section className='w-4/5 mx-auto mt-5 '>
          <div className=' my-3'>
            <Button title={GENERATE} type='submit' />
          </div>
        </section>
      </form>
    </>
  );
}

export default DisplayMemeInputs;
