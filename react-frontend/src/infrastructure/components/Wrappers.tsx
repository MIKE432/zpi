import styled, { css } from "styled-components";
import React from "react";
import { WithBlur, WithModal } from "../../application/types/WrapperTypes";
import { RGBAColor } from "../../application/types/UITypes";

export interface BlurOptions {
    blur: number
}

const Blur = styled.div<BlurOptions>`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(${ ({ blur }) => blur }px);
  justify-content: center;
  align-items: center;
`

//nie mam pojecia jak naprawić ten szajs XD
const Modal = styled.div<any>`
  padding: ${props => props.padding}px;
  background: ${props => props.color && css`rgba(${props.color.red}, ${props.color.green}, ${props.color.blue}, ${props.color.opacity})`};
  border-radius: ${props => props.radius}px;
  margin: ${props => props.margin ?? '0 auto'}px;
  position: ${props => props.position ?? 'inherit'};
  z-index: ${props => props.zIndex ?? 1};
  max-width: ${props => props.maxWidth ?? 'none'};
  max-height: ${props => props.maxHeight ?? 'none'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: ${props => props.margin * 2}px;
  }
`

export const Scrollable = styled.div<{ maxHeight: string}>`
  max-height: ${props => props.maxHeight};
  overflow: auto;
`

export interface ModalOptions {
    radius?: number,
    color?: RGBAColor,
    padding?: number,
    margin?: number,
    zIndex?: number,
    position?: 'fixed' | 'sticky' | 'absolute' | 'relative' | 'static' | 'inherit',
    maxWidth?: "max-content" | "none" | "min-content",
    maxHeight?: "max-content" | "none" | "min-content"
}


const defaultBlurOptions: BlurOptions = {
    blur: 8
}

const defaultModalOptions: ModalOptions = {
    radius: 20,
    color: {
        red: 255,
        green: 255,
        blue: 255,
        opacity: 0.8
    },
    padding: 20,
    margin: 0,
    position: "static",
}


export const withBlur: WithBlur = (Component: any, blurOptions: BlurOptions = defaultBlurOptions) => ({ children }) => (
    <Component>
        <Blur { ...blurOptions }>
            { children }
        </Blur>
    </Component>
)

export const withModal: WithModal = (Component: any, modalOptions: ModalOptions = defaultModalOptions) => ({ children }) => (
    <Modal { ...modalOptions }>
        <Component>
            { children }
        </Component>
    </Modal>
)