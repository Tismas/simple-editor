import * as React from 'react';

import { StoreContext } from '../store';
import { loadBackgrounds } from '../store/actions/loadBackgrounds';
import { setBackground } from '../store/actions/setBackground';

import { Label } from '../atoms/Label';
import { Button } from '../atoms/Button';
import { Backgrounds } from '../molecules/Backgrounds';

import './__styles__/background-select.scss';

export const BackgroundSelect: React.FunctionComponent = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  const { backgrounds } = state;

  React.useEffect(() => {
    if (state.backgrounds.length === 0) {
      loadBackgrounds(dispatch);
    }
  }, []);

  return (
    <div className="background-select">
      <Label>Select Background</Label>
      <Backgrounds backgrounds={backgrounds} />
      <Button onClick={() => setBackground(dispatch, null)} label="Delete Background" size="big" />
    </div>
  );
};
