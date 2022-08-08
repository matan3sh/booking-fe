import styled from "styled-components";
import { theme } from "../../styles";

export const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  overflow: hidden;
  gap: 30px;
`;

export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const BookNowButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: ${theme.colors.alternative};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const HotelTitle = styled.h1`
  font-size: 24px;
`;

export const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HotelDistance = styled.span`
  color: ${theme.colors.alternative};
  font-weight: 500;
`;

export const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

export const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const HotelImageWrapper = styled.div`
  width: 33%;
`;

export const HotelImage = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const HotelDetailsTexts = styled.div`
  flex: 3;
`;

export const HotelDescription = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 18px;
    color: #555;
  }

  span {
    font-size: 14px;
  }

  h2 {
    font-weight: 300;
  }

  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;
