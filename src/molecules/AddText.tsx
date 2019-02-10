import * as React from 'react';

import { StoreContext } from '../store';
import { addTextEntry } from '../store/actions/textEntry';
import { changeFont } from '../store/actions/changeFont';
import { IFont } from '../store/interfaces/Font';

import { Label } from '../atoms/Label';
import { RadioButton } from '../atoms/RadioButton';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

import './__styles__/add-text.scss';

interface IProps {}

const possibleFonts: IFont[] = ['Arial', 'Times New Roman', 'Open Sans'];
const DEFUALT_SIZE: number = 20;

export const AddText: React.FunctionComponent<IProps> = ({}) => {
  const { state, dispatch } = React.useContext(StoreContext);
  const [text, setText] = React.useState<string>('');

  return (
    <div className="add-text-wrapper">
      <Label>Add Text</Label>
      <Input value={text} onChange={(text) => setText(text)} placeholder="Text input" />
      <div className="fonts-wrapper">
        {possibleFonts.map((font) => (
          <RadioButton
            key={font}
            onChange={() => changeFont(dispatch, font)}
            checked={state.font === font}
            label={font}
            name="font"
          />
        ))}
      </div>
      <Button
        onClick={() => {
          if (!text) return;
          const ctx = state.canvasRef.getContext('2d');
          ctx.font = `${DEFUALT_SIZE}px ${state.font}`;
          const textWidth = ctx.measureText(text).width;
          addTextEntry(dispatch, {
            text,
            font: state.font,
            position: [200 - textWidth / 2, 200 - DEFUALT_SIZE / 2],
            size: [textWidth, DEFUALT_SIZE],
            fontSize: DEFUALT_SIZE,
          });
          setText('');
        }}
        label="Add text"
        size="big"
      />
    </div>
  );
};
