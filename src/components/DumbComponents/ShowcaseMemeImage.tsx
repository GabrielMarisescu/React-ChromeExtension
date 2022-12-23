import { ShowCaseMemeImageProps } from '../ComponentTypes';

function ShowcaseMemeImage({ imageLink, altValue }: ShowCaseMemeImageProps) {
  return (
    <img
      src={imageLink}
      alt={altValue}
      className={
        ' flex justify-center h-52 w-52 ml-auto mr-auto mt-5 object-contain'
      }
    />
  );
}

export default ShowcaseMemeImage;
