import { FC } from 'react';
import { RegisterOrganizationSectionProps } from './RegisterOrganizationPage';
import { Variants } from 'framer-motion';
import { TabsFormWrapper } from '../../../../infrastructure/components/TabsForm';
import { TextField } from '@mui/material';

export const AdditionalInfoRegisterOrganizationSection: FC<RegisterOrganizationSectionProps> =
  ({ isVisible, register }) => {
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
      <TabsFormWrapper
        variants={variants}
        transition={{ duration: 0.5 }}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        isVisible={isVisible}
      >
        <TextField
          variant={'outlined'}
          label="Opiekun"
          {...register('careProvider')}
        />
      </TabsFormWrapper>
    );
  };
