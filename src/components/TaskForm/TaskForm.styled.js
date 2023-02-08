import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  gap: 4px;
`;

export const InputStyled = styled.input`
  flex-grow: 1;
  padding: 8px;
  font: inherit;

  &:focus {
    outline-color: #1976d2;
  }
`;
