import * as React from 'react';

import { StoreContext } from '../store';
import { setBackground } from '../store/actions/setBackground';
import { IImage } from '../store/interfaces/Image';

import { Image, FakeImage } from '../atoms/Image';

import './__styles__/backgrounds.scss';

interface IProps {
  backgrounds: ReadonlyArray<IImage>;
}

export const Backgrounds: React.FunctionComponent<IProps> = ({ backgrounds }) => {
  const { dispatch } = React.useContext(StoreContext);

  return (
    <div>
      {backgrounds.length
        ? backgrounds.map((background) => (
            <Image
              onClick={() => setBackground(dispatch, background)}
              size="big"
              src={background.src}
              key={background.src}
            />
          ))
        : Array(4)
            .fill(0)
            .map((_, i) => <FakeImage size="big" key={i} />)}
    </div>
  );
};
