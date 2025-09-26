import { NavLink } from "react-router";
import logo from "../../images/Shopedia.png";
import cartimg from "../../images/cart.png";
import { ItemCount, NavbarContainer, NavLinks, StyledNavLink, TrashContainer  } from "./Nav.styled";

export default function Nav({count}) {
  return (
    <NavbarContainer>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <NavLinks>
        <StyledNavLink to="cart">Home</StyledNavLink>
        <StyledNavLink to="/">Sign Up</StyledNavLink>
        <TrashContainer >
          <img src={cartimg} alt="cart" />
          <ItemCount>{count}</ItemCount>
        </TrashContainer>
      </NavLinks>
    </NavbarContainer>
  );
}
