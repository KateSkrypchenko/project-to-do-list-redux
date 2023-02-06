import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { HeaderStyled, SectionStyled, TitleStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <SectionStyled>
        <TitleStyled>Tasks</TitleStyled>
        <TaskCounter />
      </SectionStyled>
      <SectionStyled>
        <TitleStyled>Filter by status</TitleStyled>
        <StatusFilter />
      </SectionStyled>
    </HeaderStyled>
  );
};
