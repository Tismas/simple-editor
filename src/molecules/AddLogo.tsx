import * as React from 'react';

import { StoreContext } from '../store';
import { addLogoEntry } from '../store/actions/logoEntry';
import { IImage } from '../store/interfaces/Image';

import { Label } from '../atoms/Label';
import { Image } from '../atoms/Image';

import LogoOne from '../assets/logo_one.png';
import LogoTwo from '../assets/logo_two.png';
import LogoThree from '../assets/logo_three.png';
import { loadImage } from '../utils/loadImage';

import './__styles__/add-logo.scss';

interface IProps {}

const DEFAULT_SIZE = 100;

export const AddLogo: React.FunctionComponent<IProps> = ({}) => {
  const { state, dispatch } = React.useContext(StoreContext);
  const [draggedLogo, setDraggedLogo] = React.useState<IImage | null>(null);
  const [logos, setLogos] = React.useState<IImage[]>([]);

  React.useEffect(() => {
    Promise.all(
      [LogoOne, LogoTwo, LogoThree].map(async (logoSrc) => ({
        src: logoSrc,
        image: await loadImage(logoSrc),
      })),
    ).then((logoObjects: IImage[]) => setLogos(logoObjects));
  }, []);

  const dragStart = (logo: IImage) => {
    setDraggedLogo(logo);
  };

  const dragEnd = (image: IImage, x: number, y: number) => {
    if (draggedLogo) {
      const canvasPosition = state.canvasRef.getBoundingClientRect();
      addLogoEntry(dispatch, {
        position: [
          x - DEFAULT_SIZE / 2 - canvasPosition.left,
          y - DEFAULT_SIZE / 2 - canvasPosition.top,
        ],
        image,
        size: [DEFAULT_SIZE, DEFAULT_SIZE],
      });
      setDraggedLogo(null);
    }
  };

  return (
    <div>
      <Label>Add Logo</Label>
      <div className="logos-container">
        {logos.map((logo, i) => (
          <Image
            key={i}
            isDraggable={true}
            onDragStart={() => dragStart(logo)}
            onDragEnd={(x, y) => dragEnd(logo, x, y)}
            size="small"
            src={logo.src}
          />
        ))}
      </div>
    </div>
  );
};
