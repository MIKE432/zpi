import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import { StyledProgressStepper } from './ProgressStepper.style';

export interface StepperStep {
  name: string;
  isOptional: boolean;
}

export interface ProgressStepperProps {
  steps: StepperStep[];
  activeStep: number;
  skipped: Set<number>;
}

export const ProgressStepper: FC<ProgressStepperProps> = ({
  steps,
  activeStep,
  skipped
}) => {
  return (
    <StyledProgressStepper>
      <Stepper activeStep={activeStep}>
        {steps.map(({ name, isOptional }, index) => {
          const stepProps: Partial<{ completed: boolean }> = {};
          const labelProps: Partial<{ optional: ReactNode }> = {};

          if (isOptional) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }

          if (skipped.has(index)) {
            stepProps.completed = false;
          }

          return (
            <Step key={name} {...stepProps}>
              <StepLabel {...labelProps}>{name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </StyledProgressStepper>
  );
};
