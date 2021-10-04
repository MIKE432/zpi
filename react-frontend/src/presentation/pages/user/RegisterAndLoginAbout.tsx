import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { RegisterAndLoginAboutContainerStyled } from './RegisterAndLoginAbout.style';

export interface RegisterAndLoginAboutProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  isVisible: boolean;
  buttonText: string;
  additionalText: string;
}

export const RegisterAndLoginAbout: FC<RegisterAndLoginAboutProps> = ({
  title,
  subtitle,
  isVisible,
  additionalText,
  onClick,
  buttonText
}) => {
  return (
    <RegisterAndLoginAboutContainerStyled isVisible={isVisible}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <span>{additionalText}</span>
      <Button onClick={onClick} variant="outlined" color="secondary">
        {buttonText}
      </Button>
    </RegisterAndLoginAboutContainerStyled>
  );
};
