import styled from "styled-components";
import { theme } from "../../styles";

export const FeaturedContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: ${theme.properties.zIndex};
`;

export const FeaturedItem = styled.div`
  position: relative;
  color: ${theme.colors.text};
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
`;

export const FeaturedImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const FeaturedTitles = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export const FeaturedTitle = styled.h1``;

export const FeaturedSubTitle = styled.h2``;
