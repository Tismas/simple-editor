import { SetStateAction, Dispatch } from 'react';

import { IStoreState } from '../../store';
import { ITextEntry, ILogoEntry } from '../../store/interfaces/CanvasEntries';
import { updateComponentPosition } from '../../store/actions/updateComponent';
import { IActions } from '../../store/interfaces/Actions';

import { Selection } from '../Canvas';

import { getClickedComponent } from '../../utils/getClickedComponent';

type ISelectComponent = Dispatch<SetStateAction<Selection>>;

export const repositionHandlerMouseDown = (
  e: React.MouseEvent,
  setSelectedComponent: ISelectComponent,
  textEntries: ITextEntry[],
  logoEntries: ILogoEntry[],
) => {
  setSelectedComponent(getClickedComponent(e, textEntries, logoEntries));
};

export const repositionHandlerMouseMove = (
  e: React.MouseEvent,
  state: IStoreState,
  dispatch: React.Dispatch<IActions>,
  selectedComponent: Selection,
  isMouseDown: boolean,
) => {
  if (selectedComponent && isMouseDown) {
    updateComponentPosition(state, dispatch, selectedComponent, [e.movementX, e.movementY]);
  }
};
