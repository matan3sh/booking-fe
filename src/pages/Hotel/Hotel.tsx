import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import {
  Footer,
  Header,
  ImageSlider,
  MailList,
  Navbar,
} from "../../components";
import {
  HotelContainer,
  HotelWrapper,
  BookNowButton,
  HotelTitle,
  HotelAddress,
  HotelDistance,
  HotelPriceHighlight,
  HotelImages,
  HotelImageWrapper,
  HotelImage,
  HotelDetails,
  HotelDetailsTexts,
  HotelDescription,
  HotelDetailsPrice,
} from "./styles";

export function Hotel() {
  const [slideNumber, setSlideNumber] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i: number) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <Header />

      <HotelContainer>
        {open && (
          <ImageSlider
            setOpen={setOpen}
            slideNumber={slideNumber}
            setSlideNumber={setSlideNumber}
            photos={photos}
          />
        )}

        <HotelWrapper>
          <BookNowButton>Reserve or Book Now!</BookNowButton>
          <HotelTitle>Tower Street Apartments</HotelTitle>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </HotelAddress>
          <HotelDistance>Excellent location – 500m from center</HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos.map((photo, i) => (
              <HotelImageWrapper key={photo.src}>
                <HotelImage
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                />
              </HotelImageWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsTexts>
              <HotelTitle>Stay in the heart of City</HotelTitle>
              <HotelDescription>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </HotelDescription>
            </HotelDetailsTexts>
            <HotelDetailsPrice>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button type="button">Reserve or Book Now!</button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>

        <MailList />
        <Footer />
      </HotelContainer>
    </>
  );
}
