import { ButtonStyled } from './Button.styled';

export const Button = ({ type = 'button', children, ...otherProps }) => {
  return (
    <ButtonStyled type={type} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};
