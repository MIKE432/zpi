import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { Variants } from 'framer-motion';
import { TabsFormWrapper } from '../../../infrastructure/components/TabsForm';

export const DevSelectInputs = () => {
  const variants: Variants = {
    visible: {
      opacity: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    hidden: {
      opacity: 0,
      display: 'none'
    }
  };
  return (
    <Grid container spacing={2} marginTop={'20px'}>
      <Grid item xs={12} md={6} margin={'10px'}>
        <TabsFormWrapper
          variants={variants}
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate={'visible'}
          isVisible={true}
        >
          <FormControl variant="outlined">
            <InputLabel id="organization-type">Typ organizacji</InputLabel>
            <Select defaultValue="" label="Typ organizacji">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Koło naukowe">Koło naukowe</MenuItem>
              <MenuItem value="Agenda kultury">Agenda kultury</MenuItem>
              <MenuItem value="Samorząd">Samorząd</MenuItem>
            </Select>
          </FormControl>
        </TabsFormWrapper>
      </Grid>
      <Grid item xs={12} md={6} margin={'10px'}>
        <TabsFormWrapper
          variants={variants}
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate={'visible'}
          isVisible={true}
        >
          <FormControl variant="filled">
            <InputLabel id="organization-type">Typ organizacji</InputLabel>
            <Select defaultValue="" label="Typ organizacji">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Koło naukowe">Koło naukowe</MenuItem>
              <MenuItem value="Agenda kultury">Agenda kultury</MenuItem>
              <MenuItem value="Samorząd">Samorząd</MenuItem>
            </Select>
          </FormControl>
        </TabsFormWrapper>
      </Grid>
      <Grid item xs={12} md={6} margin={'10px'}>
        <TabsFormWrapper
          variants={variants}
          transition={{ duration: 0.5 }}
          initial="hidden"
          animate={'visible'}
          isVisible={true}
        >
          <FormControl variant="standard">
            <InputLabel id="organization-type">Typ organizacji</InputLabel>
            <Select defaultValue="" label="Typ organizacji">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Koło naukowe">Koło naukowe</MenuItem>
              <MenuItem value="Agenda kultury">Agenda kultury</MenuItem>
              <MenuItem value="Samorząd">Samorząd</MenuItem>
            </Select>
          </FormControl>
        </TabsFormWrapper>
      </Grid>
    </Grid>
  );
};
