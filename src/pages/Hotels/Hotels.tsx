/* eslint-disable @typescript-eslint/no-unused-vars */
import { format } from "date-fns";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Range, DateRange } from "react-date-range";
import { Navbar, Header } from "../../components";

import {
  HotelsContainer,
  HotelsWrapper,
  HotelsSearch,
  HotelsSearchButton,
  HotelsSearchTitle,
  HotelsSearchItem,
  HotelsSearchItemLabel,
  HotelsSearchItemInput,
  HotelsSearchItemInputText,
  HotelsOptions,
  HotelsOptionItem,
  HotelsOptionText,
  HotelsOptionInput,
  HotelsResults,
} from "./styles";

type LocationState = {
  state: {
    destination: string;
    options: Record<string, number>;
    date: Range[];
  };
};

export function Hotels() {
  const { state } = useLocation() as LocationState;

  const [openDate, setOpenDate] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>(state.destination);
  const [options, setOptions] = useState<Record<string, number>>({
    adult: state.options.adult,
    children: state.options.children,
    room: state.options.room,
  });
  const [date, setDate] = useState<Range[]>([
    {
      startDate: state.date[0].startDate,
      endDate: state.date[0].endDate,
      key: "selection",
    },
  ]);

  return (
    <div>
      <Navbar />
      <Header />

      <HotelsContainer>
        <HotelsWrapper>
          <HotelsSearch>
            <HotelsSearchTitle>Search</HotelsSearchTitle>
            <HotelsSearchItem>
              <HotelsSearchItemLabel>Destination</HotelsSearchItemLabel>
              <HotelsSearchItemInput placeholder={destination} type="text" />
            </HotelsSearchItem>

            <HotelsSearchItem>
              <HotelsSearchItemLabel>Check-in Date</HotelsSearchItemLabel>
              <HotelsSearchItemInputText
                onClick={() => setOpenDate((prev) => !prev)}
              >{`${format(date[0].startDate as Date, "MM/dd/yyyy")} to ${format(
                date[0].endDate as Date,
                "MM/dd/yyyy",
              )}`}</HotelsSearchItemInputText>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </HotelsSearchItem>

            <HotelsSearchItem>
              <HotelsSearchItemLabel>Options</HotelsSearchItemLabel>

              <HotelsOptions>
                <HotelsOptionItem>
                  <HotelsOptionText>
                    Min price <small>per night</small>
                  </HotelsOptionText>
                  <HotelsOptionInput type="number" />
                </HotelsOptionItem>

                <HotelsOptionItem>
                  <HotelsOptionText>
                    Max price <small>per night</small>
                  </HotelsOptionText>
                  <HotelsOptionInput type="number" />
                </HotelsOptionItem>

                <HotelsOptionItem>
                  <HotelsOptionText>Adult</HotelsOptionText>
                  <HotelsOptionInput
                    type="number"
                    min={1}
                    placeholder={options.adult.toString()}
                  />
                </HotelsOptionItem>

                <HotelsOptionItem>
                  <HotelsOptionText>Children</HotelsOptionText>
                  <HotelsOptionInput
                    type="number"
                    min={0}
                    placeholder={options.children.toString()}
                  />
                </HotelsOptionItem>

                <HotelsOptionItem>
                  <HotelsOptionText>Room</HotelsOptionText>
                  <HotelsOptionInput
                    type="number"
                    min={1}
                    placeholder={options.room.toString()}
                  />
                </HotelsOptionItem>
              </HotelsOptions>
            </HotelsSearchItem>
            <HotelsSearchButton type="button">Search</HotelsSearchButton>
          </HotelsSearch>

          <HotelsResults>List Results</HotelsResults>
        </HotelsWrapper>
      </HotelsContainer>
    </div>
  );
}
