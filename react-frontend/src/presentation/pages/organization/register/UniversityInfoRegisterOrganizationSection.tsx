import { FC } from 'react';
import { Variants } from 'framer-motion';
import { TabsFormWrapper } from '../../../../infrastructure/components/TabsForm';
import { TextField } from '@mui/material';
import { RegisterOrganizationSectionProps } from './RegisterOrganizationPage';

export const UniversityInfoSectionRegisterOrganization: FC<RegisterOrganizationSectionProps> =
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
          label="Uczelnia"
          {...register('universityName')}
        />
        <TextField
          variant={'outlined'}
          label="Wydział rejestracji"
          helperText="Na którym wydziale została zajerestrowana wasza organizacja"
          {...register('registerFaculty')}
        />
        <TextField
          variant={'outlined'}
          label="Zakres działań"
          {...register('activitiesArea')}
        />
        <TextField
          variant={'outlined'}
          label="Obręb działań"
          helperText="Na jakich wydziałach działa organizacja"
          {...register('facultiesArea')}
        />
      </TabsFormWrapper>
    );
  };
