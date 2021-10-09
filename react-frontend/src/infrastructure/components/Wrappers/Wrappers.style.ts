import styled from '@emotion/styled';
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

export const ModalStyled = styled.div<any>`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
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
