import { DevButtons } from './DevButtons';
import { DevTextInputs } from './DevTextInputs';
import styled from '@emotion/styled';
import { DevSelectInputs } from './DevSelectInputs';

const H2Styled = styled.h2`
  text-align: left;
  margin-left: 20px;
`;

export const DevComponents = () => {
  return (
    <>
      <H2Styled>Buttons</H2Styled>
      <DevButtons />
      <H2Styled>Text Inputs</H2Styled>
      <DevTextInputs />
      <H2Styled>Select Inputs</H2Styled>
      <DevSelectInputs />
    </>
  );
};
