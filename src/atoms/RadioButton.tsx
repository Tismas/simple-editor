import * as React from 'react';

import './__styles__/radio-button.scss';

interface IProps {
  readonly label: string;
  readonly name: string;
  readonly checked?: boolean;
  onChange?(): void;
}

export const RadioButton: React.FunctionComponent<IProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
  const value = label.replace(/\s/g, '-').toLowerCase();
  const id = `${name}-${value}`;
  return (
    <div>
      <input id={id} value={value} name={name} checked={checked} onChange={onChange} type="radio" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
