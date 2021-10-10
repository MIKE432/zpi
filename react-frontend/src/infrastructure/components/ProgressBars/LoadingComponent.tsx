import { FC } from 'react';
import { WithClassName } from '../StyledComponents';
import { CircularProgress, Container } from '@mui/material';

export const LoadingComponent: FC<WithClassName> = ({ className }) => (
  <Container maxWidth="lg" className={className}>
    <CircularProgress color="inherit" />
  </Container>
);
