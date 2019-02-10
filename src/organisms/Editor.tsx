import * as React from 'react';

import { Label } from '../atoms/Label';
import { Canvas } from '../atoms/Canvas';
import { DownloadButton } from '../molecules/DownloadButton';

import './__styles__/editor.scss';

export const Editor: React.FunctionComponent = () => {
  return (
    <div className="editor">
      <Label size="big"> Simple Editor </Label>
      <Canvas />
      <DownloadButton />
    </div>
  );
};
