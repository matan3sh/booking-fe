import styled from "styled-components";
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../styles";

export const HeaderWrapper = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HeaderContainer = styled.div<{ home?: boolean }>`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
  margin-bottom: ${({ home }) => (!home ? "0px" : "100px")};
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

export const HeaderSearchContainer = styled.div`
  height: 30px;
  background-color: ${theme.colors.text};
  border: 3px solid ${theme.colors.secondery};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderSearchIcon = styled(FontAwesomeIcon)`
  color: lightgrey;
`;

export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
`;

export const HeaderSearchText = styled.span`
  color: lightgrey;
  cursor: pointer;
`;

export const HeaderSearchDate = styled(DateRange)`
  position: absolute;
  top: 50px;
  z-index: ${theme.properties.highZindex};
`;

export const HeaderOptions = styled.div`
  position: absolute;
  top: 50px;
  background-color: ${theme.colors.text};
  color: ${theme.colors.textSecondary};
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  z-index: ${theme.properties.highZindex};
`;

export const HeaderOptionsItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const HeaderOptionsText = styled.span``;

export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.alternative};
  color: ${theme.colors.alternative};
  cursor: pointer;
  background-color: ${theme.colors.text};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const OptionCounterText = styled.span``;
