import styled from '@emotion/styled';
import { TopBar } from '../../../../../infrastructure/components/topbar/TopBar';
import { Avatar, ButtonBase } from '@mui/material';

export const TopBarStyled = styled(TopBar)`
  padding: 16px 24px;
  background-color: white;
`;

export const AppBarContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AvatarStyled = styled(Avatar)`
  height: 28px;
  width: 28px;
  margin: 3px 0;
  margin-left: 3px;
`;

export const ButtonBaseStyled = styled(ButtonBase)`
  padding: 5px 5px;
  background-color: white;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const SettingIconStyled = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

export const ChildrenContainerStyled = styled.div<{ isOpen: boolean }>`
  margin: 76px 15px 0 15px;
  overflow: scroll;
  height: 100%;
  background-color: #e3f2fd;
  padding: 15px;
  border-radius: 15px;
  margin-left: ${(props) => (props.isOpen ? 240 : 15)}px;
`;

export const MainContainerStyled = styled.div`
  height: 100vh;
`;
