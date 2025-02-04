import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectCharacters = createSelector(
  selectAppState,
  (state) => state.characters
);

export const selectLoading = createSelector(
  selectAppState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAppState,
  (state) => state.error
);
