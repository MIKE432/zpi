import styled from 'styled-components';

export const LoginAboutContainer = styled.div<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  z-index: ${(props) => (props.isVisible ? '1' : '-1')};
`;
