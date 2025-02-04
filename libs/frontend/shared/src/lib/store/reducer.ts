import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import { loadCharacters, loadCharactersSuccess, loadCharactersFailure } from './actions';

export const appReducer = createReducer(
  initialState,
  on(loadCharacters, (state) => ({ ...state, loading: true, error: null })),
  on(loadCharactersSuccess, (state, { characters }) => ({
    ...state,
    characters,
    loading: false,
  })),
  on(loadCharactersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
