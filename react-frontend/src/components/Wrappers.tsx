import styled, { css } from "styled-components";
import React from "react";
import { WithBlur, WithModal } from "../types/WrapperTypes";
import { RGBAColor } from "../types/UITypes";


const Blur = styled.div<BlurOptions>`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(${ ({ blur }) => blur }px);
`

//nie mam pojecia jak naprawić ten szajs XD
const Modal = styled.div<any>`
  width: max-content;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.padding}px;
  background: ${props => props.color && css`rgba(${props.color.red}, ${props.color.green}, ${props.color.blue}, ${props.color.opacity})`};
  border-radius: ${props => props.radius}px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: max-content;
    margin: 15px;
  }
`

export const Scrollable = styled.div<{ maxHeight: string}>`
  max-height: ${props => props.maxHeight};
  overflow: auto;
`

export interface BlurOptions {
    blur: number
}

export interface ModalOptions {
    radius: number,
    color?: RGBAColor,
    padding: number
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
    padding: 20
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