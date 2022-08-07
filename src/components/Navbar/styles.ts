import styled from "styled-components";
import { theme } from "../../styles";

export const NavbarWrapper = styled.div`
  height: 50px;
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-weight: 500;
`;

export const NavbarItems = styled.div``;

export const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;
