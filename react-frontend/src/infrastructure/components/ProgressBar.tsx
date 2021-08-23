import { FC } from "react";
import { LinearProgress, withStyles } from "@material-ui/core";
import { StepperStep } from "./ProgressSteper";
import { CenteredContent } from "./CenteredContent";
import styled from "styled-components";

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

export interface ProgressBarProps {
    steps: StepperStep[],
    activeStep: number,
}

const StyledProgressBar = styled.div`
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`

export const ProgressBar: FC<ProgressBarProps> = ({ steps, activeStep }) => {
    const value = activeStep * 100 / steps.length
    const localSteps = [...steps, { name: 'Done', isOptional: false }]
    return (
        <StyledProgressBar>
            <CenteredContent width="100%">
                <BorderLinearProgress variant="determinate" value={ value }/>
                <span>{ localSteps[activeStep].name }</span>
            </CenteredContent>
        </StyledProgressBar>
    )
}