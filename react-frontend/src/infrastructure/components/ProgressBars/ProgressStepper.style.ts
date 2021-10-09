import styled from '@emotion/styled';

export const StyledProgressStepper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
  }
`;
