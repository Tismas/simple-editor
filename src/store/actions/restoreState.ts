import { ILoadState } from '../interfaces/Actions';
import { loadState } from '../../utils/loadState';
import { makeImages } from './makeImages';

export const restoreState = (dispatch: React.Dispatch<ILoadState>) => {
  const state = loadState();
  dispatch({ type: 'load-state', payload: state });
  makeImages(state, dispatch);
};
