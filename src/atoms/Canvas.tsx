import * as React from 'react';

import { StoreContext, IContextValue } from '../store';
import { deleteComponent } from '../store/actions/deleteComponent';
import { updateOutputImageUrl } from '../store/actions/updateOutputImageUrl';
import { setCanvasRef } from '../store/actions/setCanvasRef';
import { ITextEntry, ILogoEntry } from '../store/interfaces/CanvasEntries';

import { repositionHandlerMouseDown, repositionHandlerMouseMove } from './canvas/repositionHandler';
import { drawBackground } from './canvas/drawBackground';
import { drawLogos } from './canvas/drawLogos';
import { drawTexts } from './canvas/drawTexts';

import { ContextMenu } from './ContextMenu';
import { getClickedComponent } from '../utils/getClickedComponent';

import './__styles__/canvas.scss';

interface IProps {}

type Position = [number, number];
export type Selection = ITextEntry | ILogoEntry | null;

export const CANVAS_SIZE = 400;

export const Canvas: React.FunctionComponent<IProps> = () => {
  const { state, dispatch } = React.useContext<IContextValue>(StoreContext);
  const { textEntries, logoEntries, activeBackground, canvasLoading } = state;
  const canvasRef = React.useRef(null);

  const [selectedComponent, setSelectedComponent] = React.useState<Selection>(null);
  const [isMouseDown, setMouseDown] = React.useState<boolean>(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState<Position>([0, 0]);
  const [isContextMenuOpen, setIsContextMenuOpen] = React.useState(false);
  const [contextMenuTarget, setContextMenuTarget] = React.useState<ITextEntry | ILogoEntry | null>(
    null,
  );

  const _repositionHandlerMouseDown = (e: React.MouseEvent) => {
    setIsContextMenuOpen(false);
    setMouseDown(true);
    repositionHandlerMouseDown(e, setSelectedComponent, textEntries, logoEntries);
  };
  const _repositionHandlerMouseMove = (e: React.MouseEvent) => {
    repositionHandlerMouseMove(e, state, dispatch, selectedComponent, isMouseDown);
  };
  const _repositionHandlerMouseUp = (e: React.MouseEvent) => {
    setMouseDown(false);
  };

  const _contextMenuHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const clickedComponent = getClickedComponent(e, textEntries, logoEntries);
    if (clickedComponent) {
      setIsContextMenuOpen(true);
      setContextMenuPosition([e.pageX, e.pageY]);
      setContextMenuTarget(clickedComponent);
    }
  };
  const _deleteHandler = (e: React.MouseEvent) => {
    setIsContextMenuOpen(false);
    if (contextMenuTarget) {
      deleteComponent(state, dispatch, contextMenuTarget);
    }
  };

  React.useEffect(() => {
    setCanvasRef(dispatch, canvasRef.current);
  }, [canvasRef.current]);

  React.useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current;
    if (canvas && !canvasLoading) {
      const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
      drawBackground(ctx, activeBackground, CANVAS_SIZE);
      drawLogos(ctx, logoEntries);
      drawTexts(ctx, textEntries);
      updateOutputImageUrl(dispatch, canvas);
    }
  }, [activeBackground, logoEntries, textEntries, canvasLoading]);

  return (
    <>
      <canvas
        onMouseDown={_repositionHandlerMouseDown}
        onMouseMove={_repositionHandlerMouseMove}
        onMouseUp={_repositionHandlerMouseUp}
        onContextMenu={_contextMenuHandler}
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
      />
      <ContextMenu
        onDelete={_deleteHandler}
        isOpen={isContextMenuOpen}
        position={contextMenuPosition}
      />
    </>
  );
};
