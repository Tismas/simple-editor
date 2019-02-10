import { IImage } from '../../store/interfaces/Image';

export const drawBackground = async (
  ctx: CanvasRenderingContext2D,
  background: IImage,
  canvasSize: number,
) => {
  if (background && background.image) {
    ctx.drawImage(background.image, 0, 0, 400, 400);
  } else {
    ctx.fillStyle = '#f9f9f9';
    ctx.fillRect(0, 0, 400, 400);

    // consider using linear gradient instead of lines
    ctx.lineWidth = 20;
    ctx.strokeStyle = '#f4f4f4';
    const spacing = 50;
    for (let i = 10; i < canvasSize * 2 + spacing; i += spacing) {
      ctx.beginPath();
      ctx.moveTo(-10, i);
      ctx.lineTo(i, -10);
      ctx.stroke();
    }
  }
};
