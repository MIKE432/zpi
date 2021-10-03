import React from 'react';
import { WithBlur, WithModal } from '../../../application/types/WrapperTypes';
import { Blur, BlurOptions, Modal, ModalOptions } from './Wrappers.style';

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

export const withModal: WithModal =
  (Component: any, modalOptions: ModalOptions = defaultModalOptions) =>
  ({ children }) =>
    (
      <Modal {...modalOptions}>
        <Component>{children}</Component>
      </Modal>
    );
