import styled from "styled-components";

export const ImageSliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
  }

  .arrow {
    margin: 20px;
    font-size: 50px;
    color: lightgray;
    cursor: pointer;
  }
`;

export const ImageSliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageSliderImage = styled.img`
  width: 80%;
  height: 80vh;
`;
