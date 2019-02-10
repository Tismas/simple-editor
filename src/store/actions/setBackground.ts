import { ISetBackgroundAction } from '../interfaces/Actions';
import { IImage } from '../interfaces/Image';
import { loadImage } from '../../utils/loadImage';

export const setBackground = async (
  dispatch: React.Dispatch<ISetBackgroundAction>,
  payload: IImage | null,
) => {
  if (payload === null) {
    dispatch({ type: 'set-background', payload: null });
  }
  const bg = payload.image && payload.image.src ? payload.image : await loadImage(payload.src);
  dispatch({ type: 'set-background', payload: { src: payload.src, image: bg } });
};
