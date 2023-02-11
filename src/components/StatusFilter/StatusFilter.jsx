import { useSelector, useDispatch } from 'react-redux';

import { statusFilters } from 'redux/constants';
import { selectStatusFilter } from 'redux/selectors';
import { setStatusFilter } from 'redux/filtersSlice';

import { Button } from 'components/Button/Button';

import { WrapperStyled } from './StatusFilter.styled';

export const StatusFilter = () => {
  const filter = useSelector(selectStatusFilter);

  const dispatch = useDispatch();
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <WrapperStyled>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </WrapperStyled>
  );
};
