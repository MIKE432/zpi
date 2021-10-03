import styled from 'styled-components';

export const StyledProgressStepper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
  }
`;
