import {
  HotelCardContainer,
  HotelCardImage,
  HotelCardDescription,
  HotelCardTitle,
  HotelCardDistance,
  HotelCardTax,
  HotelCardSubtitle,
  HotelCardFeatures,
  HotelCardCancel,
  HotelCardCancelSubtitle,
  HotelCardDetails,
  HotelCardRating,
  HotelCardContent,
  HotelCardContentPrice,
  HotelCardContentTax,
  HotelCardContentButton,
} from "./styles";

export function HotelCard() {
  return (
    <HotelCardContainer>
      <HotelCardImage
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
      />
      <HotelCardDescription>
        <HotelCardTitle>Tower Street Apartments</HotelCardTitle>
        <HotelCardDistance>500m from center</HotelCardDistance>
        <HotelCardTax>Free airport taxi</HotelCardTax>
        <HotelCardSubtitle>
          Studio Apartment with Air conditioning
        </HotelCardSubtitle>
        <HotelCardFeatures>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </HotelCardFeatures>
        <HotelCardCancel>Free cancellation</HotelCardCancel>
        <HotelCardCancelSubtitle>
          You can cancel later, so lock in this great price today!
        </HotelCardCancelSubtitle>
      </HotelCardDescription>

      <HotelCardDetails>
        <HotelCardRating>
          <span>Excellent</span>
          <button type="button">8.9</button>
        </HotelCardRating>

        <HotelCardContent>
          <HotelCardContentPrice>$112</HotelCardContentPrice>
          <HotelCardContentTax>Includes taxes and fees</HotelCardContentTax>
          <HotelCardContentButton type="button">
            See availability
          </HotelCardContentButton>
        </HotelCardContent>
      </HotelCardDetails>
    </HotelCardContainer>
  );
}
