import { FC } from 'react';
import { WithClassName } from './StyledComponents';

export const SideBar: FC<WithClassName> = ({ className }) => {
  return <div className={className}>Side bar</div>;
};
