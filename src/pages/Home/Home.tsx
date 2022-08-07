import { Featured, Header, Navbar, PropertyList } from "../../components";

import { HomeWrapper, HomeContainer, HomeTitle } from "./styles";

export function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <Header type="home" />

      <HomeContainer>
        <Featured />

        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />
      </HomeContainer>
    </HomeWrapper>
  );
}
