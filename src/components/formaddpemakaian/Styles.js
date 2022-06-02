import styled from "styled-components";
import { resetInput, v } from "../../styles/Variables";

export const SForm = styled.form`
  background-color: ${({ theme }) => theme.bg1};

  @media screen and (min-width: ${v.mdWidth}) {
    padding: 0 1rem;
  }
`;

export const SFormFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.bg2};
  padding: 1rem;
`;

export const SFormBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const SFormRowGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 0.2rem;
`;

export const SFormRowTitle = styled.h4`
  width: 100%;
`;
export const SFormGroup = styled.div`
  flex: 1;
`;

export const SFormControl = styled.input`
  ${resetInput}
  width:100%;
  /* outline: 1px solid red; */
  background-color: ${({ theme }) => theme.bg};
  padding: 0.2rem 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.bg2};

  :focus {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;
