import styled from "styled-components";
import { v } from "../../styles/Variables";

export const STimeContainer = styled.form`
  ${v.fixed99}
  display:flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bg1};
  box-shadow: 0 0 8px ${({ theme }) => theme.bgA};
`;

export const STimeBody = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const SBodySelect = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  appearance: none;

  option {
    font-size: 1rem;
  }
`;
