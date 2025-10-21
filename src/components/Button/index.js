import { ButtonContainer } from "./styles";

const Button = ({label, onclick}) => {
  return (
    <ButtonContainer onClick = {onclick} type="button">
      {label}
    </ButtonContainer>
  );
}

export default Button;