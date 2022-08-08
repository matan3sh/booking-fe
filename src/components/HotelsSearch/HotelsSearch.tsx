/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { format } from "date-fns";
import { DateRange, Range } from "react-date-range";

import {
  HotelsSearchContainer,
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
} from "./styles";

interface IProps {
  destination: string;
  options: Record<string, number>;
  date: Range[];
}

export function HotelsSearch({ destination, options, date }: IProps) {
  const [openDate, setOpenDate] = useState<boolean>(false);
  const [currentDestination, setCurrentDestination] =
    useState<string>(destination);
  const [currentOptions, setCurrentOptions] = useState<Record<string, number>>({
    adult: options.adult,
    children: options.children,
    room: options.room,
  });
  const [currentDate, setCurrentDate] = useState<Range[]>([
    {
      startDate: date[0].startDate,
      endDate: date[0].endDate,
      key: "selection",
    },
  ]);

  return (
    <HotelsSearchContainer>
      <HotelsSearchTitle>Search</HotelsSearchTitle>
      <HotelsSearchItem>
        <HotelsSearchItemLabel>Destination</HotelsSearchItemLabel>
        <HotelsSearchItemInput placeholder={currentDestination} type="text" />
      </HotelsSearchItem>

      <HotelsSearchItem>
        <HotelsSearchItemLabel>Check-in Date</HotelsSearchItemLabel>
        <HotelsSearchItemInputText
          onClick={() => setOpenDate((prev) => !prev)}
        >{`${format(
          currentDate[0].startDate as Date,
          "MM/dd/yyyy",
        )} to ${format(
          currentDate[0].endDate as Date,
          "MM/dd/yyyy",
        )}`}</HotelsSearchItemInputText>
        {openDate && (
          <DateRange
            onChange={(item) => setCurrentDate([item.selection])}
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
              placeholder={currentOptions.adult.toString()}
            />
          </HotelsOptionItem>

          <HotelsOptionItem>
            <HotelsOptionText>Children</HotelsOptionText>
            <HotelsOptionInput
              type="number"
              min={0}
              placeholder={currentOptions.children.toString()}
            />
          </HotelsOptionItem>

          <HotelsOptionItem>
            <HotelsOptionText>Room</HotelsOptionText>
            <HotelsOptionInput
              type="number"
              min={1}
              placeholder={currentOptions.room.toString()}
            />
          </HotelsOptionItem>
        </HotelsOptions>
      </HotelsSearchItem>
      <HotelsSearchButton type="button">Search</HotelsSearchButton>
    </HotelsSearchContainer>
  );
}
