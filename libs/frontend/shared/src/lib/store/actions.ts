import { createAction, props } from '@ngrx/store';

export const loadCharacters = createAction('[Star Wars] Load Characters');
export const loadCharactersSuccess = createAction(
  '[Star Wars] Load Characters Success',
  props<{ characters: any[] }>()
);
export const loadCharactersFailure = createAction(
  '[Star Wars] Load Characters Failure',
  props<{ error: string }>()
);
