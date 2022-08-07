import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderWrapper = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;

export const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

export const HeaderItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  border: ${({ active }) =>
    active ? `1px solid ${theme.colors.text}` : "none"};
  padding: ${({ active }) => (active ? "10px" : "0")};
  border-radius: ${({ active }) => (active ? "20px" : "0")};
`;

export const HeaderItemText = styled.span``;

export const HeaderTitle = styled.h1``;

export const HeaderDescription = styled.p`
  margin: 20px 0px;
`;

export const HeaderButton = styled.button`
  background-color: ${theme.colors.alternative};
  color: ${theme.colors.text};
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
