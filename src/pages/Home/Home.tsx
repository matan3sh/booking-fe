import {
  Featured,
  Header,
  Navbar,
  PropertyList,
  FeaturedProperties,
} from "../../components";

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

        <HomeTitle>Homes guests love</HomeTitle>
        <FeaturedProperties />
      </HomeContainer>
    </HomeWrapper>
  );
}
