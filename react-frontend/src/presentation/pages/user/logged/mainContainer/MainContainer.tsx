import { FC } from 'react';
import { useUser } from '../../../../../application/hooks/useUser';
import {
  ChildrenContainerStyled,
  MainContainerStyled,
  TopBarStyled
} from './MainContainer.style';
import styled from '@emotion/styled';
import {
  SideNavBar,
  useSideBar
} from '../../../../../infrastructure/components/topbar/SideNavBar';

const OuterContentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

const InnerContentContainerStyled = styled.div`
  width: 100%;
`;

export const MainContainer: FC = ({ children }) => {
  const { user } = useUser();
  const { SideNavBar, setIsOpen, isOpen } = useSideBar();

  return (
    <MainContainerStyled>
      <TopBarStyled user={user}>{user?.name}</TopBarStyled>
      <OuterContentContainerStyled>
        <SideNavBar>TO niezły topbar</SideNavBar>
        <InnerContentContainerStyled>
          <ChildrenContainerStyled isOpen={isOpen}>
            <button onClick={() => setIsOpen(!isOpen)}>XD</button>
            {children}
          </ChildrenContainerStyled>
        </InnerContentContainerStyled>
      </OuterContentContainerStyled>
    </MainContainerStyled>
  );
};
