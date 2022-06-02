import { Link } from "react-router-dom";
import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SSidebar = styled.nav`
  background-color: ${({ theme }) => theme.bg1};
  flex-direction: column;

  @media screen and (max-width: ${v.mdWidth}) {
    ${v.absolute9};
    display: ${({ show }) => (show ? "flex" : "none")};
    width: 80%;
    background-color: ${({ theme }) => theme.bg5};
    color: ${({ theme }) => theme.bg1};
  }

  @media screen and (min-width: ${v.mdWidth}) {
    width: ${v.sidebarWidth};
    display: flex;
  }
`;

export const SNavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  background: inherit;

  :last-child {
    border: none;
  }

  @media screen and (max-width: ${v.mdWidth}) {
    border-bottom: 1px solid ${({ theme }) => theme.text};
    padding: 1rem;
    :hover {
      filter: brightness(80%);
    }
  }

  @media screen and (min-width: ${v.mdWidth}) {
    border-bottom: 1px solid ${({ theme }) => theme.bg2};
    :hover {
      filter: brightness(80%);
    }
  }
`;

export const SButtonClose = styled.button`
  font-size: 1.5rem;
  position: absolute;
  top: 0.2rem;
  right: -15%;
  color: red;
  background-color: ${({ theme }) => theme.bg1};
  border-radius: 50%;
  padding: 0.5rem;
  opacity: 0.6;

  :hover {
    opacity: 1;
  }

  @media screen and (min-width: ${v.mdWidth}) {
    display: none;
  }
`;
