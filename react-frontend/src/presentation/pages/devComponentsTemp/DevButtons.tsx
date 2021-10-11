import { Button, Grid } from '@mui/material';
import React from 'react';

export const DevButtons = () => {
  return (
    <Grid container spacing={2} marginTop={'20px'}>
      <Grid item xs={4} md={2} lg={1}>
        <Button variant="text">Text</Button>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Button variant="outlined">Outlined</Button>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Button fullWidth={true} variant="contained">
          Zarejestruj się
        </Button>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Button disabled={true}>Back</Button>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Button disabled={false}>Back</Button>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Button>{3 === 3 ? 'Zarejestruj' : 'Next'}</Button>
      </Grid>
    </Grid>
  );
};
