import styled from '@emotion/styled';

export const StyledDivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CenteredContent = styled.div<{ width?: string }>`
  width: ${(props) => props.width ?? '50%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
    width: 100%;
  }
`;

export interface WithClassName {
  className?: any;
}
