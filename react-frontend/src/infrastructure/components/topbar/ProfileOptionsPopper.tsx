import {
  ClickAwayListener,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popper,
  PopperProps,
  Typography
} from '@mui/material';
import { FC } from 'react';
import { PaperSettingsStyled } from '../../../presentation/pages/user/logged/mainContainer/MainContainer.style';
import { useUser } from '../../../application/hooks/useUser';
import {
  ListItemButtonStyled,
  ListStyled,
  NameHeaderStyled
} from './ProfileOptionsPopper.style';
import { IconLogout, IconUser } from '@tabler/icons';
import { useHistory } from 'react-router-dom';

export const ProfileOptionsPopper: FC<
  PopperProps & { handleClose: (e: any) => void }
> = ({ children, handleClose, ...props }) => {
  const { user, logout: userLogout } = useUser();
  const { replace } = useHistory();

  function logout() {
    userLogout();
    replace('/user/login');
  }
  return (
    <Popper {...props}>
      <PaperSettingsStyled>
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            <NameHeaderStyled>
              <strong>Witaj</strong>, {user?.name} {user?.lastName}
            </NameHeaderStyled>
            <Divider />
            <ListStyled>
              <ListItemButtonStyled onClick={() => logout()}>
                <ListItemIcon>
                  <IconUser stroke={1.5} size="1.3rem" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Profil</Typography>}
                />
              </ListItemButtonStyled>
              <ListItemButtonStyled onClick={() => logout()}>
                <ListItemIcon>
                  <IconLogout stroke={1.5} size="1.3rem" />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography variant="body2">Wyloguj</Typography>}
                />
              </ListItemButtonStyled>
            </ListStyled>
          </div>
        </ClickAwayListener>
      </PaperSettingsStyled>
    </Popper>
  );
};
