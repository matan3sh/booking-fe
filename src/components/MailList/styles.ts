import styled from "styled-components";
import { theme } from "../../styles";

export const MailListContainer = styled.div`
  width: 100vw;
  margin-top: 50px;
  background-color: ${theme.colors.primary};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
`;

export const MailListTitle = styled.h1``;

export const MailListDescription = styled.span``;

export const MailInputContainer = styled.div`
  input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
  }

  button {
    height: 50px;
    background-color: ${theme.colors.alternative};
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
