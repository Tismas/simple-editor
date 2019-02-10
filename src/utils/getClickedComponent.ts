import { ITextEntry, ILogoEntry } from '../store/interfaces/CanvasEntries';
import { isPointInRect } from './isPointInRect';

export const getClickedComponent = (
  e: React.MouseEvent,
  textEntries: ITextEntry[],
  logoEntries: ILogoEntry[],
) => {
  let selectedComponent: ITextEntry | ILogoEntry | null = null;
  for (let entry of [...textEntries, ...logoEntries]) {
    if (
      isPointInRect(
        { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
        { x: entry.position[0], y: entry.position[1], width: entry.size[0], height: entry.size[1] },
      )
    ) {
      selectedComponent = entry;
      break;
    }
  }
  return selectedComponent;
};
