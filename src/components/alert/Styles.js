import styled from "styled-components";

export const SAlert = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  background-color: ${({ theme, type }) => theme[type + "Bg"]};
  color: ${({ theme, type }) => theme[type + "Text"]};
`;

export const SAlertClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.5rem;
`;

export const SAlertIcon = styled.div`
  font-size: 2rem;
`;

export const SAlertMsg = styled.div`
  & :first-child {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
