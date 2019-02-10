import { IActions } from '../interfaces/Actions';
import { setBackground } from './setBackground';
import { IStoreState } from '../store';
import { loadImage } from '../../utils/loadImage';
import { ILogoEntry } from '../interfaces/CanvasEntries';

const getFilledLogoEntries = async (logoEntries: ILogoEntry[]) => {
  return await Promise.all(
    logoEntries.map(
      async (logo): Promise<ILogoEntry> => ({
        ...logo,
        image: {
          ...logo.image,
          image: await loadImage(logo.image.src),
        },
      }),
    ),
  );
};

export const makeImages = async (state: IStoreState, dispatch: React.Dispatch<IActions>) => {
  await setBackground(dispatch, state.activeBackground);
  dispatch({
    type: 'update-logo-entries',
    payload: await getFilledLogoEntries(state.logoEntries),
  });
  dispatch({ type: 'set-loading', payload: false });
};
