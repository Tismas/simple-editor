import * as React from 'react';

import { StoreProvider } from './store';
import { BackgroundSelect } from './organisms/BackgroundSelect';
import { Editor } from './organisms/Editor';
import { ComponentsPanel } from './organisms/ComponentsPanel';

import './__styles__/reset.scss';
import './__styles__/app.scss';

export const App = () => {
  return (
    <StoreProvider>
      <div className="app-wrapper">
        <BackgroundSelect />
        <Editor />
        <ComponentsPanel />
      </div>
    </StoreProvider>
  );
};
