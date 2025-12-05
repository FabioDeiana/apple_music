import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeezerTrack } from '../types/deezer';

interface FavoritesState {
  tracks: DeezerTrack[];
}

const initialState: FavoritesState = {
  tracks: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<DeezerTrack>) => {
      const exists = state.tracks.find(track => track.id === action.payload.id);
      if (!exists) {
        state.tracks.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.tracks = state.tracks.filter(track => track.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<DeezerTrack>) => {
      const index = state.tracks.findIndex(track => track.id === action.payload.id);
      if (index >= 0) {
        state.tracks.splice(index, 1);
      } else {
        state.tracks.push(action.payload);
      }
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;