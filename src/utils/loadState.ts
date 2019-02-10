import { IStoreState } from '../store';

export const loadState = (): IStoreState | null => {
  const localStorageState = localStorage['simple-editor-state'];
  if (localStorageState) {
    const state: IStoreState = JSON.parse(localStorageState);
    state.canvasLoading = true;
    return state;
  }
  return null;
};
