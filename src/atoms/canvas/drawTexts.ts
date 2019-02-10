import { ITextEntry } from '../../store/interfaces/CanvasEntries';

export const drawTexts = (ctx: CanvasRenderingContext2D, textEntries: ITextEntry[]) => {
  textEntries.forEach((textEntry) => {
    ctx.fillStyle = '#000';
    ctx.font = `${textEntry.fontSize}px ${textEntry.font}`;
    ctx.textBaseline = 'hanging';
    ctx.fillText(textEntry.text, ...textEntry.position);
  });
};
