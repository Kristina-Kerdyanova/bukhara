import { IDetails } from "../../types";
import { StyledTextList, TextListItem } from "./style";

export const TextList = ({ details }: IDetails) => {
  return (
    <StyledTextList>
      {details.map((detail) => (
        <TextListItem>{detail}</TextListItem>
      ))}
    </StyledTextList>
  );
};
