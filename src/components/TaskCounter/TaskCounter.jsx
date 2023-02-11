import { useSelector } from 'react-redux';

import { selectTaskCount } from 'redux/selectors';

import { TextStyled } from './TaskCounter.styled';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <TextStyled>Active: {count.active}</TextStyled>
      <TextStyled>Completed: {count.completed}</TextStyled>
    </div>
  );
};
