import { useSelector } from 'react-redux';

import { selectVisibleTasks } from 'redux/selectors';

import { Task } from 'components/Task/Task';

import { ListStyled, ItemStyled } from './TaskList.styled';

export const TaskList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);

  return (
    <ListStyled>
      {visibleTasks.map(task => (
        <ItemStyled key={task.id}>
          <Task task={task} />
        </ItemStyled>
      ))}
    </ListStyled>
  );
};
