import { useHistory } from 'react-router-dom';
import { LoginMenu, LoginMenuContainer } from './RegisterAndLoginRoutes.style';
import { Button } from '@material-ui/core';

export const LoginTopBar = () => {
  const history = useHistory();
  return (
    <LoginMenuContainer>
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
    </LoginMenuContainer>
  );
};
