import { useLocation } from "react-router-dom";
import { Range } from "react-date-range";

import { Navbar, Header, HotelCard, HotelsSearch } from "../../components";
import { HotelsContainer, HotelsWrapper, HotelsResults } from "./styles";

export type LocationState = {
  state: {
    destination: string;
    options: Record<string, number>;
    date: Range[];
  };
};

export function Hotels() {
  const { state } = useLocation() as LocationState;

  return (
    <div>
      <Navbar />
      <Header />

      <HotelsContainer>
        <HotelsWrapper>
          <HotelsSearch
            destination={state.destination}
            options={state.options}
            date={state.date}
          />

          <HotelsResults>
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </HotelsResults>
        </HotelsWrapper>
      </HotelsContainer>
    </div>
  );
}
