import { IChangeFontAction } from '../interfaces/Actions';
import { IFont } from '../interfaces/Font';

export const changeFont = (dispatch: React.Dispatch<IChangeFontAction>, font: IFont) => {
  dispatch({ type: 'change-font', payload: font });
};
