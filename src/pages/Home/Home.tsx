import {
  Featured,
  Header,
  Navbar,
  PropertyList,
  FeaturedProperties,
  MailList,
  Footer,
} from "../../components";

import { HomeWrapper, HomeContainer, HomeTitle } from "./styles";

export function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <Header home />

      <HomeContainer>
        <Featured />

        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList />

        <HomeTitle>Homes guests love</HomeTitle>
        <FeaturedProperties />

        <MailList />
        <Footer />
      </HomeContainer>
    </HomeWrapper>
  );
}
