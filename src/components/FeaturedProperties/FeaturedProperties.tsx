import {
  FeaturedPropertiesContainer,
  FeaturedPropertiesItem,
  FeaturedPropertiesImage,
  FeaturedPropertiesName,
  FeaturedPropertiesCity,
  FeaturedPropertiesPrice,
  FeaturedPropertiesRating,
} from "./styles";

export function FeaturedProperties() {
  return (
    <FeaturedPropertiesContainer>
      <FeaturedPropertiesItem>
        <FeaturedPropertiesImage
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
        />
        <FeaturedPropertiesName>Aparthotel Stare Miasto</FeaturedPropertiesName>
        <FeaturedPropertiesCity>Madrid</FeaturedPropertiesCity>
        <FeaturedPropertiesPrice>Starting from $120</FeaturedPropertiesPrice>
        <FeaturedPropertiesRating>
          <button type="button">8.9</button>
          <span>Excellent</span>
        </FeaturedPropertiesRating>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <FeaturedPropertiesImage
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
        />
        <FeaturedPropertiesName>Comfort Suites Airport</FeaturedPropertiesName>
        <FeaturedPropertiesCity>Austin</FeaturedPropertiesCity>
        <FeaturedPropertiesPrice>Starting from $140</FeaturedPropertiesPrice>
        <FeaturedPropertiesRating>
          <button type="button">9.3</button>
          <span>Exceptional</span>
        </FeaturedPropertiesRating>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <FeaturedPropertiesImage
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
        />
        <FeaturedPropertiesName>Four Seasons Hotel</FeaturedPropertiesName>
        <FeaturedPropertiesCity>Lisbon</FeaturedPropertiesCity>
        <FeaturedPropertiesPrice>Starting from $99</FeaturedPropertiesPrice>
        <FeaturedPropertiesRating>
          <button type="button">8.8</button>
          <span>Excellent</span>
        </FeaturedPropertiesRating>
      </FeaturedPropertiesItem>

      <FeaturedPropertiesItem>
        <FeaturedPropertiesImage
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
        />
        <FeaturedPropertiesName>Hilton Garden Inn</FeaturedPropertiesName>
        <FeaturedPropertiesCity>Berlin</FeaturedPropertiesCity>
        <FeaturedPropertiesPrice>Starting from $105</FeaturedPropertiesPrice>
        <FeaturedPropertiesRating>
          <button type="button">8.9</button>
          <span>Excellent</span>
        </FeaturedPropertiesRating>
      </FeaturedPropertiesItem>
    </FeaturedPropertiesContainer>
  );
}
