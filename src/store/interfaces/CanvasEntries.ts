import { IFont } from './Font';
import { IImage } from './Image';

export interface ICanvasEntry {
  position: [number, number];
  size: [number, number];
}
export interface ITextEntry extends ICanvasEntry {
  text: string;
  font: IFont;
  fontSize: number;
}
export interface ILogoEntry extends ICanvasEntry {
  image: IImage;
}
