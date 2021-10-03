import { MouseEventHandler } from 'react';

export interface RGBAColor {
  red: number;
  green: number;
  blue: number;
  opacity: number;
}

export interface DialogProps {
  onClose: MouseEventHandler;
  closeOnOutsideClick: boolean;
  isVisible: boolean;
}
