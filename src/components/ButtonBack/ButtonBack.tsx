import { useNavigate } from "react-router-dom";
import { ButtonBackImage, StyledButtonBack } from "./styles";

export const ButtonBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <StyledButtonBack type="button" onClick={handleBack}>
      <ButtonBackImage src="../../icons/left.png" alt="back"/>
    </StyledButtonBack>
  );
};