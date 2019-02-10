import { ISetCanvasRef } from '../interfaces/Actions';

export const setCanvasRef = (
  dispatch: React.Dispatch<ISetCanvasRef>,
  payload: HTMLCanvasElement | null,
) => {
  dispatch({ type: 'set-canvas-ref', payload });
};
