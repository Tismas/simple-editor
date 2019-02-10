import { IUpdateOutputImageUrlAction } from '../interfaces/Actions';

export const updateOutputImageUrl = (
  dispatch: React.Dispatch<IUpdateOutputImageUrlAction>,
  canvas: HTMLCanvasElement,
) => {
  const outputImageUrl = canvas.toDataURL().replace('image/png', 'image/octet-stream');
  dispatch({ type: 'set-image-url', payload: outputImageUrl });
};
