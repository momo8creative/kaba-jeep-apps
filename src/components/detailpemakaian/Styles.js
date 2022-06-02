import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SDetailContainer = styled.div`
  ${v.absolute9};
  background-color: ${({ theme }) => theme.bg1};
`;

export const SDetailHeader = styled.header``;

export const SDetailFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.bg2};
  padding: 1rem;
  display: flex;
  /* justify-content: center; */
  column-gap: 1rem;

  & > button {
    width: 100%;
  }
`;

export const SDetailBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
  padding: 1rem;

  & * {
    /* border: 1px solid red; */
  }
`;

export const SBodyItem = styled.div`
  width: ${({ col }) =>
    col
      ? "calc((100% - " + [(col - 1) * 0.5] + "rem) / " + [col] + ")"
      : "100%"};

  & > div {
    padding: 0.2rem 1rem;
    background-color: ${({ theme }) => theme.bg};
    font-size: 1.2rem;
    font-weight: bold;
    text-align: ${({ right }) => (right ? "right" : "")};
  }
`;
