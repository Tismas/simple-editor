import * as React from 'react';

import { StoreContext } from '../store';
import { restoreState } from '../store/actions/restoreState';

import { Button } from '../atoms/Button';

import './__styles__/state-buttons.scss';

interface IProps {}

export const StateButtons: React.FunctionComponent<IProps> = ({}) => {
  const { state, dispatch } = React.useContext(StoreContext);

  const _saveState = () => {
    const { canvasRef, ...toSave } = state;
    localStorage['simple-editor-state'] = JSON.stringify(toSave);
  };

  return (
    <div className="state-buttons-wrapper">
      <Button label="Save" size="small" onClick={_saveState} />
      <Button label="Load" size="small" onClick={() => restoreState(dispatch)} />
    </div>
  );
};
