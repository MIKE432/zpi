import { FC } from "react";
import styled from "styled-components";
import { DialogProps } from "../types/UITypes";

const ModalBackground = styled.div<{ blur?: number, isVisible: boolean }>`
  width: 100vw;
  height: 100vh;
  z-index: 50;
  position: absolute;
  top: 0;
  display: ${ props => props.isVisible ? 'flex' : 'none' };
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(${ ({ blur }) => blur ?? 0 }px);
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);;
  border-radius: 15px;
  margin: 0;
  z-index: 51;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px;
  }

`

export const Dialog: FC<DialogProps> = ({ children, closeOnOutsideClick, onClose, isVisible }) => {
    return (
        <>
            <ModalBackground isVisible={ isVisible } blur={ 2 } onClick={ (e) => {
                e.stopPropagation()
                closeOnOutsideClick && onClose(e)
            } }>
                <Modal onClick={ (e) => {
                    e.stopPropagation()
                } }>
                    {
                        children
                    }
                </Modal>
            </ModalBackground>

        </>
    )
}