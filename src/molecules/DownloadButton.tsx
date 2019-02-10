import * as React from 'react';

import { StoreContext } from '../store';
import { Button } from '../atoms/Button';

import './__styles__/download-button.scss';

export const DownloadButton: React.FunctionComponent = () => {
  const { state } = React.useContext(StoreContext);
  const { outputImageUrl } = state;
  return (
    <a download="hire-me.png" href={outputImageUrl}>
      <Button label="Download an Image" size="big" />
    </a>
  );
};
