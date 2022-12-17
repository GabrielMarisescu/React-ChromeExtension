import React from 'react';

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

interface Data {
  memes: Meme[];
}

export interface getMemesResponse {
  success: boolean;
  data: Data;
}

export interface ShowCaseMemeImageProps {
  imageLink?: string;
  altValue?: string;
}

export interface withMemeDataProps {
  WrappedComponent: React.FC;
  loading: boolean;
  error: any;
}

export interface AppProps {
  data: getMemesResponse;
}
