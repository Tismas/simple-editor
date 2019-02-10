import * as React from 'react';

import { loadState } from '../utils/loadState';

import { IActions } from './interfaces/Actions';
import { IImage } from './interfaces/Image';
import { ILogoEntry, ITextEntry } from './interfaces/CanvasEntries';
import { IFont } from './interfaces/Font';
import { makeImages } from './actions/makeImages';

export interface IContextValue {
  state: IStoreState;
  dispatch: React.Dispatch<IActions>;
}

export interface IStoreState {
  backgrounds: ReadonlyArray<IImage>;
  textEntries: ITextEntry[];
  logoEntries: ILogoEntry[];
  activeBackground: IImage | null;
  canvasRef: HTMLCanvasElement | null;
  outputImageUrl: string;
  font: IFont;
  canvasLoading: boolean;
}

const initialState: IStoreState = loadState() || {
  backgrounds: [],
  textEntries: [],
  logoEntries: [],
  activeBackground: null,
  canvasRef: null,
  outputImageUrl: '#',
  font: 'Arial',
  canvasLoading: false,
};
const Context = React.createContext({ state: initialState, dispatch: null });

const reducer = (state: IStoreState, action: IActions): IStoreState => {
  switch (action.type) {
    case 'load-state':
      return { ...action.payload };
    case 'set-loading':
      return { ...state, canvasLoading: action.payload };
    case 'load-backgrounds':
      return { ...state, backgrounds: action.payload };
    case 'set-background':
      return { ...state, activeBackground: action.payload };
    case 'set-image-url':
      return { ...state, outputImageUrl: action.payload };
    case 'change-font':
      return { ...state, font: action.payload };
    case 'add-text-entry':
      return { ...state, textEntries: [...state.textEntries, action.payload] };
    case 'add-logo-entry':
      return { ...state, logoEntries: [...state.logoEntries, action.payload] };
    case 'set-canvas-ref':
      return { ...state, canvasRef: action.payload };
    case 'update-logo-entries':
      return { ...state, logoEntries: action.payload };
    case 'update-text-entries':
      return { ...state, textEntries: action.payload };
    default:
      return state;
  }
};

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value: IContextValue = { state, dispatch };

  React.useEffect(() => {
    if (state.canvasLoading) {
      makeImages(state, dispatch);
    }
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const StoreContext = Context;
