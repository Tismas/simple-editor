import { ILoadBackgroundsAction } from '../interfaces/Actions';
import { loadImage } from '../../utils/loadImage';
import { IImage } from '../interfaces/Image';

export const loadBackgrounds = async (dispatch: React.Dispatch<ILoadBackgroundsAction>) => {
  const responses = await Promise.all([
    fetch('https://source.unsplash.com/random/400x400?nature'),
    fetch('https://source.unsplash.com/random/400x400?cat'),
    fetch('https://source.unsplash.com/random/400x400?music'),
    fetch('https://source.unsplash.com/random/400x400?tech'),
  ]);
  const images = await Promise.all(
    responses.map(async (response) => ({
      src: response.url,
      image: await loadImage(response.url),
    })),
  );

  dispatch({
    type: 'load-backgrounds',
    payload: images,
  });
};
