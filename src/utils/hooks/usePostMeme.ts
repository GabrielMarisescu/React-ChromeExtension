import { useAtom } from 'jotai';
import React from 'react';
import { inputBoxesValues } from '../../MainStore';

export const usePostMeme = (templateId: string) => {
  const [captionedURL, setCaptionedURL] = React.useState<string>('');
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [inputBoxes, _] = useAtom(inputBoxesValues);

  const username: string = import.meta.env.VITE_ACCOUNT_USERNAME;
  const password: string = import.meta.env.VITE_ACCOUNT_PASSWORD;

  //Create a form data object
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  formData.append('template_id', templateId);
  inputBoxes.forEach((c: any, index: number) =>
    formData.append(`boxes[${index}][text]`, c)
  );

  const makeRequest = () => {
    setLoading(true);
    setError(null);
    fetch('https://api.imgflip.com/caption_image', {
      method: 'POST',
      body: formData,
    })
      .then((data) => data.json())
      .then((data) => setCaptionedURL(data.data.url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    makeRequest();
  }, []);

  return { captionedURL, loading, error };
};
