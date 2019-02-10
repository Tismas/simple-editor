export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.crossOrigin = 'true';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};
