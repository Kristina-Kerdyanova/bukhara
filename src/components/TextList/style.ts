import styled from "styled-components";
import { typography } from "../../ui/typography";

const StyledTextList = styled.ul`
  max-width: 750px;
`;

const TextListItem = styled.li`
  /* text-indent: 15px;
  font-size: 18px;
  line-height: 27px;
  text-align: justify;
  margin-bottom: 5px; */
  ${typography.p}
`;

export { StyledTextList, TextListItem };
