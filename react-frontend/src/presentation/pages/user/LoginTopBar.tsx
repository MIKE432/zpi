import { useHistory } from 'react-router-dom';
import { LoginMenu, LoginMenuContainer } from './RegisterAndLoginRoutes.style';
import { Modal } from '../../../infrastructure/components/Wrappers/Wrappers';
import { Button } from '@mui/material';

export const LoginTopBar = () => {
  const history = useHistory();
  return (
    <LoginMenuContainer>
      <Modal>
        <LoginMenu>
          <Button
            onClick={() => {
              history.push('/');
            }}
          >
            Main
          </Button>
          <Button
            onClick={() => {
              history.push('/user/login');
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              history.push('/user/register');
            }}
          >
            <span>Register</span>
          </Button>
        </LoginMenu>
      </Modal>
    </LoginMenuContainer>
  );
};
