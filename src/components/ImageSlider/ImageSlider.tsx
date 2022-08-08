import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  ImageSliderContainer,
  ImageSliderWrapper,
  ImageSliderImage,
} from "./styles";

interface IProps {
  setOpen: (open: boolean) => void;
  slideNumber: number;
  setSlideNumber: (slideNumber: number) => void;
  photos: { src: string }[];
}

export function ImageSlider({
  setOpen,
  slideNumber,
  setSlideNumber,
  photos,
}: IProps) {
  const handleMove = (direction: string) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <ImageSliderContainer>
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="close"
        onClick={() => setOpen(false)}
      />
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        className="arrow"
        onClick={() => handleMove("l")}
      />
      <ImageSliderWrapper>
        <ImageSliderImage src={photos[slideNumber].src} alt="" />
      </ImageSliderWrapper>
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        className="arrow"
        onClick={() => handleMove("r")}
      />
    </ImageSliderContainer>
  );
}
