import styled from "styled-components";

export const StyledDivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const StyledDivColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const AnimatedDiv = styled.div<{ isVisible: boolean }>`
  transition: 2s;
  opacity: ${props => props.isVisible ? '1' : '0'};
`