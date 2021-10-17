import styled from '@emotion/styled';
import { TopBar } from '../../../../../infrastructure/components/topbar/TopBar';
import { Avatar, Box, Chip, Paper } from '@mui/material';

export const TopBarStyled = styled(TopBar)<{ bgColor: string }>`
  padding: 16px 24px;
  background-color: ${(props) => props.bgColor};
`;

export const AppBarContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PaperSettingsStyled = styled(Paper)`
  border-radius: 15px;
  shadow-box: 40px;
`;

export const ChildrenContainerStyled = styled(Box)<{ isOpen: boolean }>`
  margin: 76px 15px 0 15px;
  overflow: scroll;
  height: calc(100% - 76px);
  padding: 15px;
  border-radius: 15px 15px 0 0;
  margin-left: ${(props) => (props.isOpen ? 240 : 15)}px;
`;

export const MainContainerStyled = styled.div`
  height: 100vh;
`;

export const OuterContentContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InnerContentContainerStyled = styled.div`
  width: 100%;
  height: 100vh;
`;
