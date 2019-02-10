import { ILogoEntry } from '../../store/interfaces/CanvasEntries';

export const drawLogos = (ctx: CanvasRenderingContext2D, logoEntries: ILogoEntry[]) => {
  logoEntries.forEach(async (logoEntry) => {
    ctx.drawImage(
      logoEntry.image.image,
      logoEntry.position[0],
      logoEntry.position[1],
      ...logoEntry.size,
    );
  });
};
