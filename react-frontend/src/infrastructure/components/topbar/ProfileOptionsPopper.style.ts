import styled from '@emotion/styled';
import { List, ListItemButton } from '@mui/material';

export const NameHeaderStyled = styled.div`
  padding: 15px 70px;
`;

export const ListStyled = styled(List)`
  width: '100%',
  maxWidth: '350px',
  minWidth: '300px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '100%'
  };
  padding: 15px;
`;

export const ListItemButtonStyled = styled(ListItemButton)`
  border-radius: 15px;
`;
