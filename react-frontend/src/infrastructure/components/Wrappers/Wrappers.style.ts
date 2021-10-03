import styled, { css } from 'styled-components';
import { RGBAColor } from '../../../application/types/UITypes';

export interface BlurOptions {
  blur: number;
}

export const Blur = styled.div<BlurOptions>`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(${({ blur }) => blur}px);
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div<any>`
  padding: ${(props) => props.padding}px;
  background: ${(props) =>
    props.color &&
    css`rgba(${props.color.red}, ${props.color.green}, ${props.color.blue}, ${props.color.opacity})`};
  border-radius: ${(props) => props.radius}px;
  margin: ${(props) => props.margin ?? '0 auto'}px;
  position: ${(props) => props.position ?? 'inherit'};
  z-index: ${(props) => props.zIndex ?? 1};
  max-width: ${(props) => props.maxWidth ?? 'none'};
  max-height: ${(props) => props.maxHeight ?? 'none'};

  @media (max-width: 768px) {
    flex-direction: column;
    margin: ${(props) => props.margin * 2}px;
  }
`;

export const Scrollable = styled.div<{ maxHeight: string }>`
  max-height: ${(props) => props.maxHeight};
  overflow: auto;
`;

export interface ModalOptions {
  radius?: number;
  color?: RGBAColor;
  padding?: number;
  margin?: number;
  zIndex?: number;
  position?:
    | 'fixed'
    | 'sticky'
    | 'absolute'
    | 'relative'
    | 'static'
    | 'inherit';
  maxWidth?: 'max-content' | 'none' | 'min-content';
  maxHeight?: 'max-content' | 'none' | 'min-content';
}
