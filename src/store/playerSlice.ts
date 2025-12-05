import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeezerTrack } from '../types/deezer';

interface PlayerState {
  currentTrack: DeezerTrack | null;
  isPlaying: boolean;
}

const initialState: PlayerState = {
  currentTrack: null,
  isPlaying: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<DeezerTrack>) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
    },
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    stopPlayer: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setCurrentTrack, togglePlay, stopPlayer } = playerSlice.actions;
export default playerSlice.reducer;