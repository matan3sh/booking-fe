import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderList,
  HeaderItem,
  HeaderItemText,
  HeaderTitle,
  HeaderDescription,
  HeaderButton,
} from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderList>
          <HeaderItem active>
            <FontAwesomeIcon icon={faBed} />
            <HeaderItemText>Stays</HeaderItemText>
          </HeaderItem>
          <HeaderItem>
            <FontAwesomeIcon icon={faPlane} />
            <HeaderItemText>Flights</HeaderItemText>
          </HeaderItem>
          <HeaderItem>
            <FontAwesomeIcon icon={faCar} />
            <HeaderItemText>Car rentals</HeaderItemText>
          </HeaderItem>
          <HeaderItem>
            <FontAwesomeIcon icon={faBed} />
            <HeaderItemText>Attractions</HeaderItemText>
          </HeaderItem>
          <HeaderItem>
            <FontAwesomeIcon icon={faTaxi} />
            <HeaderItemText>Airport taxis</HeaderItemText>
          </HeaderItem>
        </HeaderList>

        <HeaderTitle>A lifetime of discounts? It's Genius</HeaderTitle>
        <HeaderDescription>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Booking account
        </HeaderDescription>
        <HeaderButton>Sign in / Register</HeaderButton>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
