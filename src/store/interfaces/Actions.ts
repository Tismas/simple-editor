import { IImage } from './Image';
import { ITextEntry, ILogoEntry } from './CanvasEntries';
import { IFont } from './Font';
import { IStoreState } from '../store';

export interface ILoadBackgroundsAction {
  type: 'load-backgrounds';
  payload: IImage[];
}
export interface ISetLoading {
  type: 'set-loading';
  payload: boolean;
}
export interface ISetBackgroundAction {
  type: 'set-background';
  payload: IImage | null;
}
export interface IChangeFontAction {
  type: 'change-font';
  payload: IFont;
}
export interface IAddTextEntryAction {
  type: 'add-text-entry';
  payload: ITextEntry;
}
export interface IAddLogoEntryAction {
  type: 'add-logo-entry';
  payload: ILogoEntry;
}
export interface IUpdateOutputImageUrlAction {
  type: 'set-image-url';
  payload: string;
}
export interface ISetCanvasRef {
  type: 'set-canvas-ref';
  payload: HTMLCanvasElement | null;
}
export interface IUpdateTextEntries {
  type: 'update-text-entries';
  payload: ITextEntry[];
}
export interface IUpdateLogoEntries {
  type: 'update-logo-entries';
  payload: ILogoEntry[];
}
export interface ILoadState {
  type: 'load-state';
  payload: IStoreState;
}

export type IActions =
  | ILoadBackgroundsAction
  | ISetBackgroundAction
  | IChangeFontAction
  | IAddTextEntryAction
  | IAddLogoEntryAction
  | ISetCanvasRef
  | IUpdateTextEntries
  | IUpdateLogoEntries
  | ILoadState
  | ISetLoading
  | IUpdateOutputImageUrlAction;
