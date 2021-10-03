import { LinearProgress, withStyles } from '@material-ui/core';
import { StepperStep } from './ProgressSteper';
import styled from 'styled-components';

export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff'
  }
}))(LinearProgress);

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
