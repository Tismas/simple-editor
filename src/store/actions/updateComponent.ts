import { IStoreState } from '../store';
import { ITextEntry, ILogoEntry, ICanvasEntry } from '../interfaces/CanvasEntries';
import { IUpdateLogoEntries, IUpdateTextEntries } from '../interfaces/Actions';
import { CANVAS_SIZE } from '../../atoms/Canvas';

function isTextEntry(entry: ITextEntry | ILogoEntry): entry is ITextEntry {
  return (<ITextEntry>entry).text !== undefined;
}

function clamp(x: number, y: number, width: number, height: number) {
  return [
    Math.min(Math.max(x, 0), CANVAS_SIZE - width),
    Math.min(Math.max(y, 0), CANVAS_SIZE - height),
  ];
}

const getPaylaod = <T extends ICanvasEntry>(
  originalEntries: T[],
  entry: T,
  delta: [number, number],
) => {
  const entries = [...originalEntries];
  const entryIndex = entries.indexOf(entry);
  const entryToModify = entries.splice(entryIndex, 1)[0];
  return [
    ...entries,
    {
      ...entry,
      position: [
        ...clamp(
          entryToModify.position[0] + delta[0],
          entryToModify.position[1] + delta[1],
          ...entryToModify.size,
        ),
      ],
    },
  ];
};

export const updateComponentPosition = (
  state: IStoreState,
  dispatch: React.Dispatch<IUpdateLogoEntries | IUpdateTextEntries>,
  entry: ITextEntry | ILogoEntry,
  delta: [number, number],
) => {
  const { textEntries } = state;
  if (isTextEntry(entry)) {
    dispatch({
      type: 'update-text-entries',
      payload: getPaylaod(textEntries, entry, delta),
    });
  } else {
    const { logoEntries } = state;
    dispatch({
      type: 'update-logo-entries',
      payload: getPaylaod(logoEntries, entry, delta),
    });
  }
};
