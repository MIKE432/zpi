import {
  Modal,
  withBlur
} from '../../../infrastructure/components/Wrappers/Wrappers';
import styled from '@emotion/styled';

export const LoginMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;

  @media (max-width: 768px) {
    justify-content: space-between;
    margin: 0 auto;
  }
`;

export const RegisterAndLoginModuleContainerStyled = withBlur(styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-image: url(https://source.unsplash.com/Q7PclNhVRI0);
  width: 100vw;
  overflow: hidden;
`);

export const RegisterAndLoginPageContainerStyled = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoginMenuContainer = styled.div`
  width: max-content;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;
  z-index: 10;
  height: max-content;
  position: fixed;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const LoginAndRegisterFormStyled = styled(Modal)`
  padding: 20px;
  shadow: 0px;
`;
