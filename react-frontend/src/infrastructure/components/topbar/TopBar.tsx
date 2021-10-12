import { FC, ReactNode } from 'react';
import { WithClassName } from '../StyledComponents';
import { User } from '../../../application/store/UserProvider/UserProvider';
import { Typography } from '@mui/material';
import { AppBar } from '@mui/material';
import {
  AppBarContentStyled,
  AvatarStyled,
  ButtonBaseStyled,
  SettingIconStyled
} from '../../../presentation/pages/user/logged/mainContainer/MainContainer.style';
import settings from '../../../assets/setting.png';

export type TopBarProps = { user: User | undefined } & WithClassName;

export const TopBar: FC<TopBarProps> = ({ className, user }) => {
  function renderButtonBase() {
    return (
      <ButtonBaseStyled>
        <AvatarStyled>{user?.name.substr(0, 1)}</AvatarStyled>
        <SettingIconStyled src={settings} height={20} />
      </ButtonBaseStyled>
    );
  }

  function renderAppContent(): ReactNode {
    return (
      <AppBarContentStyled>
        <Typography variant={'h5'} color="primary">
          SZTOS
        </Typography>
        {renderButtonBase()}
      </AppBarContentStyled>
    );
  }
  return (
    <AppBar className={className} elevation={0}>
      {renderAppContent()}
    </AppBar>
  );
};
