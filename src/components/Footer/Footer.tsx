import {
  FooterContainer,
  FooterLists,
  FooterList,
  FooterListItem,
  FooterText,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterLists>
        <FooterList>
          <FooterListItem>Countries</FooterListItem>
          <FooterListItem>Regions</FooterListItem>
          <FooterListItem>Cities</FooterListItem>
          <FooterListItem>Districts</FooterListItem>
          <FooterListItem>Airports</FooterListItem>
          <FooterListItem>Hotels</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem>Homes</FooterListItem>
          <FooterListItem>Apartments</FooterListItem>
          <FooterListItem>Resorts</FooterListItem>
          <FooterListItem>Villas</FooterListItem>
          <FooterListItem>Hostels</FooterListItem>
          <FooterListItem>Guest houses</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem>Unique places to stay</FooterListItem>
          <FooterListItem>Reviews</FooterListItem>
          <FooterListItem>Unpacked: Travel articles</FooterListItem>
          <FooterListItem>Travel communities</FooterListItem>
          <FooterListItem>Seasonal and holiday deals</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem>Car rental</FooterListItem>
          <FooterListItem>Flight Finder</FooterListItem>
          <FooterListItem>Restaurant reservations</FooterListItem>
          <FooterListItem>Travel Agents</FooterListItem>
        </FooterList>

        <FooterList>
          <FooterListItem>Customer Service</FooterListItem>
          <FooterListItem>Partner Help</FooterListItem>
          <FooterListItem>Careers</FooterListItem>
          <FooterListItem>Sustainability</FooterListItem>
          <FooterListItem>Press center</FooterListItem>
          <FooterListItem>Safety Resource Center</FooterListItem>
          <FooterListItem>Investor relations</FooterListItem>
          <FooterListItem>Terms & conditions</FooterListItem>
        </FooterList>
      </FooterLists>

      <FooterText>Copyright © 2022 Matan Shaviro.</FooterText>
    </FooterContainer>
  );
}
