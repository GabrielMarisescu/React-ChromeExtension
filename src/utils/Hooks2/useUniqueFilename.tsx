import { useState, useEffect } from 'react';

const useUniqueFilename = () => {
  const [fileName, setFilename] = useState('');

  useEffect(() => {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 5);
    setFilename(`${timestamp}-${randomString}.jpg`);
  }, []);

  return fileName;
};

export default useUniqueFilename;
