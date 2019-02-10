import { IAddTextEntryAction } from '../interfaces/Actions';
import { ITextEntry } from '../interfaces/CanvasEntries';

export const addTextEntry = (dispatch: React.Dispatch<IAddTextEntryAction>, entry: ITextEntry) => {
  dispatch({ type: 'add-text-entry', payload: entry });
};
