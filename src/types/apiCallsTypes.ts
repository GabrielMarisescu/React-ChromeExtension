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

export interface GetMemesResponse {
  success: boolean;
  data: Data;
}

export interface WithMemeDataProps {
  WrappedComponent: React.FC;
  loading: boolean;
  error: any;
}

export interface MemePageProps {
  data: GetMemesResponse;
}

export interface CaptionedData {
  success: boolean;
  data: {
    url: string;
    page_url: string;
  };
}
