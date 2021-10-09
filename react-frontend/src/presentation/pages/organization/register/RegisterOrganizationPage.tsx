import { FC, useState } from 'react';
import { ProgressBar } from '../../../../infrastructure/components/ProgressBars/ProgressBar';
import {
  ProgressStepper,
  StepperStep
} from '../../../../infrastructure/components/ProgressBars/ProgressSteper';
import { Button } from '@mui/material';
import {
  CenteredContent,
  StyledDivRow
} from '../../../../infrastructure/components/StyledComponents';
import { AboutOrganizationRegisterOrganizationSection } from './AboutOrganizationRegisterOrganizationSection';
import { UniversityInfoSectionRegisterOrganization } from './UniversityInfoRegisterOrganizationSection';
import { AdditionalInfoRegisterOrganizationSection } from './AdditionalInfoRegisterOrganizationSection';
import {
  UseFormGetValues,
  UseFormRegister
} from 'react-hook-form/dist/types/form';
import { useForm } from 'react-hook-form';
import { PreviewRegisterOrganizationSection } from './PreviewRegisterOrganizationSection';

const steps: StepperStep[] = [
  {
    name: 'Podstawowe informacje',
    isOptional: false
  },
  {
    name: 'Informacje o uczelni',
    isOptional: false
  },
  {
    name: 'Dodatkowe informacje',
    isOptional: false
  }
];

interface Inputs {
  organizationType: string;
  organizationName: string;
  organizationEmail: string;
  organizationAbout: string;
  careProvider: string;
  universityName: string;
  registerFaculty: string;
  activitiesArea: string;
  facultiesArea: string;
}

const defaultValues: Inputs = {
  organizationType: '',
  organizationName: '',
  organizationEmail: '',
  organizationAbout: '',
  careProvider: '',
  universityName: '',
  registerFaculty: '',
  activitiesArea: '',
  facultiesArea: ''
};

export interface RegisterOrganizationSectionProps {
  isVisible: boolean;
  register: UseFormRegister<Inputs>;
  getValues?: UseFormGetValues<Inputs>;
}

export const RegisterOrganizationPage: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const { register, getValues } = useForm({ defaultValues });
  const handleNext = () => {
    let newSkipped = skipped;
    if (skipped.has(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === steps.length) return;
    setActiveStep((prevActiveStep) => prevActiveStep + (1 % steps.length));
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <CenteredContent width="100%">
      <h3>Zarejestruj swoją organizację</h3>
      <ProgressBar steps={steps} activeStep={activeStep} />
      <ProgressStepper
        steps={steps}
        activeStep={activeStep}
        skipped={skipped}
      />
      <form>
        <AboutOrganizationRegisterOrganizationSection
          isVisible={activeStep === 0}
          register={register}
          getValues={getValues}
        />
        <UniversityInfoSectionRegisterOrganization
          isVisible={activeStep === 1}
          register={register}
        />
        <AdditionalInfoRegisterOrganizationSection
          isVisible={activeStep === 2}
          register={register}
        />
        <PreviewRegisterOrganizationSection isVisible={activeStep === 3} />
      </form>

      <StyledDivRow>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {activeStep === 3 ? 'Zarejestruj' : 'Next'}
        </Button>
      </StyledDivRow>
    </CenteredContent>
  );
};
