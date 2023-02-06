import { TextStyled } from './TaskCounter.styled';

export const TaskCounter = () => {
  return (
    <div>
      <TextStyled>Active: 0</TextStyled>
      <TextStyled>Completed: 0</TextStyled>
    </div>
  );
};
