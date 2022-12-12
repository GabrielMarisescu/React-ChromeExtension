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
