import React, { FC, HTMLAttributes, ReactNode } from 'react';
import {
  BlurOptions,
  ModalOptions
} from '../../infrastructure/components/Wrappers/Wrappers.style';

export type WithBlur = (
  Component: ReactNode | any,
  blurOptions?: BlurOptions
) => FC<React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>>;
export type WithModal = (
  Component: ReactNode | any,
  modalOptions?: ModalOptions
) => FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;
