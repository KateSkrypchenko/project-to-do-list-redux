import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
  font: inherit;
  cursor: pointer;
  background-color: #e2e5e8;
  color: inherit;

  &:hover,&:focus, &:active {
background-color: #1976d2;
  color: #fff;
}
  }
`;

// .btn.isSelected {
//   background-color: #1976d2;
//   color: #fff;
// }
