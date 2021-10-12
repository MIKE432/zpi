import styled from "styled-components";

export const CenteredContent = styled.div<{ width?: string }>`
  width: ${props => props.width ?? '50%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
    width: 100%;
  }
`