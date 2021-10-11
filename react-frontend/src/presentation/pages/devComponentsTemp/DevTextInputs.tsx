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

export const DevTextInputs = () => {
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
            <TextField variant={'outlined'} label="Nazwa organizacji" />
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
            <TextField variant={'filled'} label="Nazwa organizacji" />
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
            <TextField variant={'standard'} label="Nazwa organizacji" />
          </FormControl>
        </TabsFormWrapper>
      </Grid>
    </Grid>
  );
};
