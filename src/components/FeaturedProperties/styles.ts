import styled from "styled-components";
import { theme } from "../../styles";

export const FeaturedPropertiesContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FeaturedPropertiesItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const FeaturedPropertiesImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const FeaturedPropertiesName = styled.span`
  color: #333;
  font-weight: bold;
`;

export const FeaturedPropertiesCity = styled.span`
  font-weight: 300;
`;

export const FeaturedPropertiesPrice = styled.span`
  font-weight: 500;
`;

export const FeaturedPropertiesRating = styled.div`
  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`;
