import * as React from 'react';

import './__styles__/context-menu.scss';

interface IProps {
  position: [number, number];
  isOpen: boolean;
  onDelete?: (e: React.MouseEvent) => void;
}

export const ContextMenu: React.FunctionComponent<IProps> = ({ isOpen, position, onDelete }) => {
  if (!isOpen) return null;
  return (
    <div style={{ left: position[0], top: position[1] }} className="context-menu">
      <ul className="context-menu-list">
        <li onClick={onDelete} className="context-menu-option">
          Delete
        </li>
      </ul>
    </div>
  );
};
