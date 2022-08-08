import styled from "styled-components";
import { theme } from "../../styles";

export const HotelCardContainer = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const HotelCardImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const HotelCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

export const HotelCardTitle = styled.h1`
  font-size: 20px;
  color: ${theme.colors.alternative};
`;

export const HotelCardDistance = styled.span`
  font-size: 12px;
`;

export const HotelCardTax = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

export const HotelCardSubtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const HotelCardFeatures = styled.span`
  font-size: 12px;
`;

export const HotelCardCancel = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

export const HotelCardCancelSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;

export const HotelCardDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HotelCardRating = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-weight: 500;
  }

  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;

export const HotelCardContent = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const HotelCardContentPrice = styled.span`
  font-size: 24px;
`;

export const HotelCardContentTax = styled.span`
  font-size: 12px;
  color: ${theme.colors.textSecondary};
`;

export const HotelCardContentButton = styled.button`
  background-color: ${theme.colors.alternative};
  color: ${theme.colors.text};
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
