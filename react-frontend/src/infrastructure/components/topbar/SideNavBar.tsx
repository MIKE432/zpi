import { Drawer } from '@mui/material';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';

const drawerWidth = 240;

const StaticSideNavBar = styled.div<{ isOpen: boolean }>`
  margin-top: 76px;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  width: 240px;
  left: ${(props) => (props.isOpen ? 0 : -drawerWidth)}px;
`;

export const SideNavBar: FC = ({ children }) => {
  const { isOpen, setIsOpen } = useSideBar();
  let intViewportWidth = window.innerWidth;
  return intViewportWidth < 700 ? (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      variant={'temporary'}
    >
      {children}
    </Drawer>
  ) : (
    <StaticSideNavBar isOpen={isOpen}>{children}</StaticSideNavBar>
  );
};

export const SideBarContext = createContext({
  SideNavBar,
  setIsOpen: (open: boolean) => {},
  isOpen: false
});

export const useSideBar = () => useContext(SideBarContext);

export const SideNavBarProvider: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <SideBarContext.Provider value={{ SideNavBar, setIsOpen, isOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};
