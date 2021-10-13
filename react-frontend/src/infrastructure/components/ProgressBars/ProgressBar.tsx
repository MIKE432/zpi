import { FC } from 'react';
import { CenteredContent } from '../StyledComponents';
import {
  BorderLinearProgress,
  ProgressBarProps,
  StyledProgressBar
} from './ProgressBar.style';

export const ProgressBar: FC<ProgressBarProps> = ({ steps, activeStep }) => {
  const value = (activeStep * 100) / steps.length;
  const localSteps = [...steps, { name: 'Done', isOptional: false }];
  return (
    <StyledProgressBar>
      <CenteredContent width="100%">
        <BorderLinearProgress variant="determinate" value={value} />
        <span>{localSteps[activeStep].name}</span>
      </CenteredContent>
    </StyledProgressBar>
  );
};
