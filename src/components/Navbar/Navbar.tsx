import {
  NavbarWrapper,
  NavbarContainer,
  Logo,
  NavbarItems,
  NavButton,
} from "./styles";

export function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Logo>Booking</Logo>

        <NavbarItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavbarItems>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
