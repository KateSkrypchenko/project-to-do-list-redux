import styled from 'styled-components';

export const ListStyled = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ItemStyled = styled.li`
  & + & {
    border-top: 1px solid #2f2f37;
  }
`;
