import * as React from 'react';

import './__styles__/input.scss';

interface IProps {
  readonly value?: string;
  readonly placeholder?: string;
  onChange?(value: string): void;
}

export const Input: React.FunctionComponent<IProps> = ({ value, onChange, placeholder }) => {
  const [_value, _setValue] = React.useState<string>(value);

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    _setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input
      value={value === undefined ? _value : value}
      onChange={_onChange}
      placeholder={placeholder}
      className="input"
      type="text"
    />
  );
};

Input.defaultProps = {
  value: '',
};
