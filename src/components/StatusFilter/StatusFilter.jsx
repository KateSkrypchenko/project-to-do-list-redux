import { Button } from 'components/Button/Button';

import { WrapperStyled } from './StatusFilter.styled';

export const StatusFilter = () => {
  return (
    <WrapperStyled>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </WrapperStyled>
  );
};
