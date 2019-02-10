import * as React from 'react';

import './__styles__/button.scss';

interface IProps {
  readonly size: 'small' | 'big';
  readonly label: string;
  onClick?(): void;
}

const classNameMap = {
  small: 'button-small',
  medium: '',
  big: 'button-big',
};

export const Button: React.FunctionComponent<IProps> = ({ label, size, onClick }) => {
  return (
    <button onClick={onClick} className={classNameMap[size]}>
      {label}
    </button>
  );
};
