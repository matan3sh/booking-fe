import { useState } from "react";

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
import { HeaderSearch } from "./HeaderSearch";

interface IProps {
  home?: boolean;
}

export function Header({ home }: IProps) {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [openOptions, setOpenOptions] = useState<boolean>(false);

  const toggleDate = () => setOpenDate((prev) => !prev);
  const toggleOptions = () => setOpenOptions((prev) => !prev);

  return (
    <HeaderWrapper>
      <HeaderContainer home={home}>
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

        {home && (
          <>
            <HeaderTitle>A lifetime of discounts? It's Genius</HeaderTitle>
            <HeaderDescription>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account
            </HeaderDescription>
            <HeaderButton>Sign in / Register</HeaderButton>

            <HeaderSearch
              openDate={openDate}
              toggleDate={toggleDate}
              openOptions={openOptions}
              toggleOptions={toggleOptions}
            />
          </>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
}
