import { LinearProgress, withStyles } from '@mui/material';
import { StepperStep } from './ProgressSteper';
import styled from '@emotion/styled';

export const BorderLinearProgress = LinearProgress;

export interface ProgressBarProps {
  steps: StepperStep[];
  activeStep: number;
}

export const StyledProgressBar = styled.div`
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
