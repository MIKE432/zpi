import { FC, ReactNode, useState } from 'react';
import { WithClassName } from '../StyledComponents';
import { User } from '../../../application/store/UserProvider/UserProvider';
import { AppBar, Avatar, Chip, Typography, useTheme } from '@mui/material';
import { AppBarContentStyled } from '../../../presentation/pages/user/logged/mainContainer/MainContainer.style';
import { ProfileOptionsPopper } from './ProfileOptionsPopper';

export type TopBarProps = { user: User | undefined } & WithClassName;

export const TopBar: FC<TopBarProps> = ({ className, user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    palette: {
      background: { paper },
      primary: { main }
    }
  } = useTheme();
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function renderButtonBase() {
    return (
      <div>
        <Chip
          onClick={handleClick}
          avatar={<Avatar>{user?.name.substr(0, 1)}</Avatar>}
          label={user?.name}
        />
        <ProfileOptionsPopper
          handleClose={handleClose}
          placement="bottom-end"
          open={open}
          anchorEl={anchorEl}
          role={undefined}
          disablePortal
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 14]
                }
              }
            ]
          }}
        />
      </div>
    );
  }

  function renderAppContent(): ReactNode {
    return (
      <AppBarContentStyled>
        <Typography variant={'h5'}>SZTOS</Typography>
        {renderButtonBase()}
      </AppBarContentStyled>
    );
  }

  return (
    <AppBar
      className={className}
      style={{ color: main, backgroundColor: paper }}
      elevation={0}
    >
      {renderAppContent()}
    </AppBar>
  );
};
