import styled from "styled-components";

export const PropertyListContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const PropertyListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const PropertyListImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const PropertyListTitles = styled.div``;

export const PropertyListTitle = styled.h1`
  font-size: 18px;
  color: #444;
`;

export const PropertyListSubTitle = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;
