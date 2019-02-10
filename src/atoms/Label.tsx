import * as React from 'react';

import './__styles__/label.scss';

interface IProps {
  readonly size?: 'small' | 'medium' | 'big';
}

const classNameMap = {
  small: 'label-small',
  medium: '',
  big: 'label-big',
};

export const Label: React.FunctionComponent<IProps> = ({ children, size }) => {
  return <span className={classNameMap[size]}>{children}</span>;
};

Label.defaultProps = {
  size: 'medium',
};
