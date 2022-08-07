import { useState } from "react";

import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { Range } from "react-date-range";

import {
  HeaderButton,
  HeaderSearchContainer,
  HeaderSearchItem,
  HeaderSearchIcon,
  HeaderSearchInput,
  HeaderSearchText,
  HeaderSearchDate,
  HeaderOptions,
  HeaderOptionsItem,
  HeaderOptionsText,
  OptionCounter,
  OptionCounterButton,
  OptionCounterText,
} from "./styles";

interface IProps {
  openDate: boolean;
  toggleDate: () => void;
  openOptions: boolean;
  toggleOptions: () => void;
}

export function HeaderSearch({
  openDate,
  toggleDate,
  openOptions,
  toggleOptions,
}: IProps) {
  const [date, setDate] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState<Record<string, number>>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (key: string, action: string) => {
    setOptions((prev) => ({
      ...prev,
      [key]: action === "i" ? prev[key] + 1 : prev[key] - 1,
    }));
  };

  return (
    <HeaderSearchContainer>
      <HeaderSearchItem>
        <HeaderSearchIcon icon={faBed} />
        <HeaderSearchInput type="text" placeholder="Where are you going?" />
      </HeaderSearchItem>

      <HeaderSearchItem>
        <HeaderSearchIcon icon={faCalendarDays} />
        <HeaderSearchText onClick={toggleDate}>{`${format(
          date[0].startDate as Date,
          "MM/dd/yyyy",
        )} to ${format(
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
        <HeaderSearchText onClick={toggleOptions}>
          {`${options.adult} adult · ${options.children} children · ${options.room} room`}
        </HeaderSearchText>

        {openOptions && (
          <HeaderOptions>
            <HeaderOptionsItem>
              <HeaderOptionsText>Adult</HeaderOptionsText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.adult <= 1}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </OptionCounterButton>
                <OptionCounterText>{options.adult}</OptionCounterText>
                <OptionCounterButton onClick={() => handleOption("adult", "i")}>
                  +
                </OptionCounterButton>
              </OptionCounter>
            </HeaderOptionsItem>

            <HeaderOptionsItem>
              <HeaderOptionsText>Children</HeaderOptionsText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.children <= 0}
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </OptionCounterButton>
                <OptionCounterText>{options.children}</OptionCounterText>
                <OptionCounterButton
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </OptionCounterButton>
              </OptionCounter>
            </HeaderOptionsItem>

            <HeaderOptionsItem>
              <HeaderOptionsText>Room</HeaderOptionsText>
              <OptionCounter>
                <OptionCounterButton
                  disabled={options.room <= 1}
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </OptionCounterButton>
                <OptionCounterText>{options.room}</OptionCounterText>
                <OptionCounterButton onClick={() => handleOption("room", "i")}>
                  +
                </OptionCounterButton>
              </OptionCounter>
            </HeaderOptionsItem>
          </HeaderOptions>
        )}
      </HeaderSearchItem>

      <HeaderSearchItem>
        <HeaderButton>Search</HeaderButton>
      </HeaderSearchItem>
    </HeaderSearchContainer>
  );
}
