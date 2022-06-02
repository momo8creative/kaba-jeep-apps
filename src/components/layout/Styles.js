import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${v.mdWidth}) {
    flex-direction: row;
  }
`;

export const SContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const SFooter = styled.footer`
  margin-top: auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.bg3};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;
