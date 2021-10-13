import { FC } from 'react';
import { RegisterOrganizationSectionProps } from './RegisterOrganizationPage';

export const PreviewRegisterOrganizationSection: FC<
  Omit<RegisterOrganizationSectionProps, 'register'>
> = ({ isVisible }) => {
  return isVisible ? <div>XD</div> : null;
};
