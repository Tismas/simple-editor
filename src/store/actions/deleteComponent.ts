import { IStoreState } from '../store';
import { ITextEntry, ILogoEntry, ICanvasEntry } from '../interfaces/CanvasEntries';
import { IUpdateLogoEntries, IUpdateTextEntries } from '../interfaces/Actions';

function isTextEntry(entry: ITextEntry | ILogoEntry): entry is ITextEntry {
  return (<ITextEntry>entry).text !== undefined;
}

export const deleteComponent = (
  state: IStoreState,
  dispatch: React.Dispatch<IUpdateLogoEntries | IUpdateTextEntries>,
  entry: ITextEntry | ILogoEntry,
) => {
  const { textEntries } = state;
  if (isTextEntry(entry)) {
    dispatch({
      type: 'update-text-entries',
      payload: [...textEntries.filter((textEntry) => textEntry !== entry)],
    });
  } else {
    const { logoEntries } = state;
    dispatch({
      type: 'update-logo-entries',
      payload: [...logoEntries.filter((logoEntry) => logoEntry !== entry)],
    });
  }
};
