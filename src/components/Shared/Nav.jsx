import { NavLink } from "react-router";
import logo from "../../images/Shopedia.png";
import cartimg from "../../images/cart.png";
import { NavbarContainer, NavLinks, StyledNavLink  } from "./Nav.styled";

export default function Nav() {
  return (
    <NavbarContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <NavLinks>
        <StyledNavLink to="cart">Home</StyledNavLink>
        <StyledNavLink to="/">Sign Up</StyledNavLink>
        <NavLink to="/">
          <img src={cartimg} alt="cart" />
        </NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}
