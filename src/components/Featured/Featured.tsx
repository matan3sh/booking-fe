import {
  FeaturedContainer,
  FeaturedItem,
  FeaturedImage,
  FeaturedTitles,
  FeaturedTitle,
  FeaturedSubTitle,
} from "./styles";

export function Featured() {
  return (
    <FeaturedContainer>
      <FeaturedItem>
        <FeaturedImage
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
        />
        <FeaturedTitles>
          <FeaturedTitle>Dublin</FeaturedTitle>
          <FeaturedSubTitle>123 properties</FeaturedSubTitle>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedImage
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
        />
        <FeaturedTitles>
          <FeaturedTitle>Reno</FeaturedTitle>
          <FeaturedSubTitle>533 properties</FeaturedSubTitle>
        </FeaturedTitles>
      </FeaturedItem>

      <FeaturedItem>
        <FeaturedImage
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
        />
        <FeaturedTitles>
          <FeaturedTitle>Austin</FeaturedTitle>
          <FeaturedSubTitle>532 properties</FeaturedSubTitle>
        </FeaturedTitles>
      </FeaturedItem>
    </FeaturedContainer>
  );
}
