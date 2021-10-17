import { FC } from 'react';
import { useUser } from '../../../../../application/hooks/useUser';
import {
  ChildrenContainerStyled,
  InnerContentContainerStyled,
  MainContainerStyled,
  OuterContentContainerStyled,
  TopBarStyled
} from './MainContainer.style';
import {
  SideNavBar,
  useSideBar
} from '../../../../../infrastructure/components/topbar/SideNavBar';
import { useTheme } from '@mui/material';

export const MainContainer: FC = ({ children }) => {
  const { user } = useUser();
  const { SideNavBar, isOpen } = useSideBar();
  const {
    palette: { background }
  } = useTheme();
  return (
    <MainContainerStyled>
      <TopBarStyled bgColor={background.default} user={user}>
        {user?.name}
      </TopBarStyled>
      <OuterContentContainerStyled>
        <SideNavBar>TO niezły sajdbar</SideNavBar>
        <InnerContentContainerStyled>
          <ChildrenContainerStyled isOpen={isOpen} bgcolor={background.default}>
            {children}
          </ChildrenContainerStyled>
        </InnerContentContainerStyled>
      </OuterContentContainerStyled>
    </MainContainerStyled>
  );
};
