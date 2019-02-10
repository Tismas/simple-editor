import { IAddLogoEntryAction } from '../interfaces/Actions';
import { ILogoEntry } from '../interfaces/CanvasEntries';

export const addLogoEntry = (dispatch: React.Dispatch<IAddLogoEntryAction>, entry: ILogoEntry) => {
  dispatch({ type: 'add-logo-entry', payload: entry });
};
