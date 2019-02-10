import * as React from 'react';

import './__styles__/image.scss';

interface IProps {
  readonly size: 'small' | 'big';
  readonly src: string;
  readonly alt?: string;
  readonly isDraggable?: boolean;
  onClick?(): void;
  onDragStart?(): void;
  onDragEnd?(x: number, y: number): void;
}

const classNameMap = {
  small: 'image-small',
  big: 'image-big',
};

export const FakeImage = ({ size }: Pick<IProps, 'size'>) => {
  return <div className={`fake-${classNameMap[size]}`} />;
};

export const Image: React.FunctionComponent<IProps> = ({
  src,
  alt,
  size,
  onClick,
  onDragStart,
  onDragEnd,
  isDraggable,
}) => {
  const _onDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    if (isDraggable && onDragStart) {
      onDragStart();
    }
  };
  const _onDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    if (isDraggable && onDragEnd) {
      onDragEnd(e.clientX, e.clientY);
    }
  };
  return (
    <img
      draggable={isDraggable}
      onClick={onClick}
      onDragStart={_onDragStart}
      onDragEnd={_onDragEnd}
      src={src}
      alt={alt}
      className={classNameMap[size]}
    />
  );
};

Image.defaultProps = {
  isDraggable: false,
  alt: 'simple editor',
};
