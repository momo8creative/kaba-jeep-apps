import styled from "styled-components";
import { v } from "./Variables";

export const SBackdrop = styled.div`
  ${v.absolute9};
  background-color: ${({ theme }) => theme.bgA};
`;
