import React, { FC } from 'react';
import { WithBlur } from '../../../application/types/WrapperTypes';
import { Blur, BlurOptions, ModalOptions } from './Wrappers.style';
import { WithClassName } from '../StyledComponents';
import { Paper } from '@mui/material';

export const defaultBlurOptions: BlurOptions = {
  blur: 8
};

export const withBlur: WithBlur =
  (Component: any, blurOptions: BlurOptions = defaultBlurOptions) =>
  ({ children }) =>
    (
      <Component>
        <Blur {...blurOptions}>{children}</Blur>
      </Component>
    );

export const defaultModalOptions: ModalOptions = {
  radius: 20,
  color: {
    red: 255,
    green: 255,
    blue: 255,
    opacity: 0.8
  },
  padding: 20,
  margin: 0,
  position: 'static'
};

export const Modal: FC<WithClassName> = ({ children, className }) => {
  return <Paper className={className}>{children}</Paper>;
};
