import { NavLink } from "react-router";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  font-family: sans-serif;
  margin: clamp(1rem, 3vw, 2rem) auto;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 3vw, 4rem);
  font-size: 1rem;
`;
export const StyledNavLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font: bolder;
  font-size: 1rem;
  &:hover {
    color: #f57c00;
  }
`;
