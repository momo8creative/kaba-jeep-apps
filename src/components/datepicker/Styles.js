import styled from "styled-components";
import { v } from "../../styles/Variables";

export const SDateContainer = styled.div`
  ${v.fixed99}
  background-color: ${({ theme }) => theme.bg1};
  box-shadow: 0 0 8px ${({ theme }) => theme.bgA};
  width: 80%;

  & * {
    /* border: 1px solid red; */
  }
`;

export const SDateHeader = styled.header`
  display: flex;
  justify-content: space-between;
  column-gap: 0.5rem;
  font-size: 1.2rem;

  & > div {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 0;
  }
`;

export const SHeaderButton = styled.button`
  padding: 0 0.5rem;
  svg {
  }
`;

export const SHeaderButtonValue = styled.button``;

export const SDateBody = styled.div`
  width: 100%;
`;

export const SDateBodyHeader = styled.header`
  display: flex;
  & > * {
    width: calc(100% / 7);
    /* height:; */
    padding: 0.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.bg1};
  }
`;

export const SDateBodyContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    padding: 0.5rem 0;
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SBodyContentButton = styled.button`
  position: relative;

  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.bg1};
  }
  ::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 80%;

    border-bottom: ${({ theme, active }) =>
      active ? "4px solid " + theme.primary : ""};
  }
`;
