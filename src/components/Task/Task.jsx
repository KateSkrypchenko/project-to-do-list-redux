import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

import { deleteTask, toggleCompleted } from 'redux/operations';

import { WrapperStyled, CheckboxStyled, TextStyled, BtnStyled } from './Task.styled';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <WrapperStyled>
      <CheckboxStyled type="checkbox" checked={task.completed} onChange={handleToggle} />
      <TextStyled>{task.text}</TextStyled>
      <BtnStyled onClick={handleDelete}>
        <MdClose size={24} />
      </BtnStyled>
    </WrapperStyled>
  );
};
