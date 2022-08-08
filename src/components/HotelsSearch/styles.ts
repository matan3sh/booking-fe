import styled from "styled-components";
import { theme } from "../../styles";

export const HotelsSearchContainer = styled.div`
  flex: 1;
  background-color: ${theme.colors.secondery};
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;

export const HotelsSearchButton = styled.button`
  padding: 10px;
  background-color: ${theme.colors.alternative};
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;

export const HotelsSearchTitle = styled.h1`
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const HotelsSearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const HotelsSearchItemLabel = styled.label`
  font-size: 12px;
`;

export const HotelsSearchItemInput = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;

export const HotelsSearchItemInputText = styled.span`
  height: 30px;
  padding: 5px;
  background-color: ${theme.colors.text};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HotelsOptions = styled.div`
  padding: 10px;
`;

export const HotelsOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: ${theme.colors.textSecondary};
  font-size: 12px;
`;

export const HotelsOptionText = styled.span`
  color: #555;
`;

export const HotelsOptionInput = styled.input`
  width: 50px;
`;
