import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SNavbar = styled.header`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.bg5};
  color: ${({ theme }) => theme.bg1};

  @media screen and (min-width: ${v.mdWidth}) {
    padding: 0 2rem;
  }
`;

export const SNavbarButton = styled.button`
  /* align-self: stretch; */
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: inherit;

  :hover {
    filter: brightness(180%);
  }

  @media screen and (min-width: ${v.mdWidth}) {
    display: none;
  }
`;
