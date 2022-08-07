import styled from "styled-components";
import { theme } from "../../styles";

export const FooterContainer = styled.div`
  width: 100%;
  width: 1024px;
  font-size: 12px;
`;

export const FooterLists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FooterListItem = styled.li`
  margin-bottom: 10px;
  color: ${theme.colors.primary};
  cursor: pointer;
`;

export const FooterText = styled.span``;
