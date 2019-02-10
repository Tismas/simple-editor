import * as React from 'react';

import { AddLogo } from '../molecules/AddLogo';
import { AddText } from '../molecules/AddText';
import { StateButtons } from '../molecules/StateButtons';

import './__styles__/components-panel.scss';

interface IProps {}

export const ComponentsPanel: React.FunctionComponent<IProps> = ({}) => {
  return (
    <div className="right-panel-wrapper">
      <AddLogo />
      <AddText />
      <StateButtons />
    </div>
  );
};
