import styled from 'styled-components';

export const RegisterAndLoginAboutContainerStyled = styled.div<{
  isVisible: boolean;
}>`
  height: 100%;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  left: 0;
  width: 50%;
  top: 0;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  z-index: ${(props) => (props.isVisible ? '1' : '-1')};
`;
