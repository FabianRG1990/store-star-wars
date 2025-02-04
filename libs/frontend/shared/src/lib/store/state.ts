export interface AppState {
  characters: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  characters: [],
  loading: false,
  error: null,
};
