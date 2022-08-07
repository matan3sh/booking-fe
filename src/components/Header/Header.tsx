import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { Range } from "react-date-range";
import { format } from "date-fns";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderList,
  HeaderItem,
  HeaderItemText,
  HeaderTitle,
  HeaderDescription,
  HeaderButton,
  HeaderSearch,
  HeaderSearchItem,
  HeaderSearchIcon,
  HeaderSearchInput,
  HeaderSearchText,
  HeaderSearchDate,
} from "./styles";

export function Header() {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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

        <HeaderSearch>
          <HeaderSearchItem>
            <HeaderSearchIcon icon={faBed} />
            <HeaderSearchInput type="text" placeholder="Where are you going?" />
          </HeaderSearchItem>

          <HeaderSearchItem>
            <HeaderSearchIcon icon={faCalendarDays} />
            <HeaderSearchText
              onClick={() => setOpenDate((prev) => !prev)}
            >{`${format(date[0].startDate as Date, "MM/dd/yyyy")} to ${format(
              date[0].endDate as Date,
              "MM/dd/yyyy",
            )}`}</HeaderSearchText>
            {openDate && (
              <HeaderSearchDate
                editableDateInputs
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
              />
            )}
          </HeaderSearchItem>

          <HeaderSearchItem>
            <HeaderSearchIcon icon={faPerson} />
            <HeaderSearchText>2 adults 2 children 1 room</HeaderSearchText>
          </HeaderSearchItem>

          <HeaderSearchItem>
            <HeaderButton>Search</HeaderButton>
          </HeaderSearchItem>
        </HeaderSearch>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
