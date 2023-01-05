import { useCallback } from 'react';

interface DownloadMemeProps {
  data: string;
  fileName: string;
}

const useDownloadMeme = () => {
  const downloadMeme = useCallback(({ data, fileName }: DownloadMemeProps) => {
    chrome.downloads.download({
      url: data,
      filename: fileName,
    });
  }, []);

  return downloadMeme;
};
export default useDownloadMeme;
