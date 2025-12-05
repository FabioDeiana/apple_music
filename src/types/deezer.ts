export interface DeezerTrack {
  id: number;
  title: string;
  duration: number;
  artist: {
    id: number;
    name: string;
    picture_medium: string;
  };
  album: {
    id: number;
    title: string;
    cover_medium: string;
    cover_small: string;
  };
  explicit_lyrics: boolean;
  preview: string;
}