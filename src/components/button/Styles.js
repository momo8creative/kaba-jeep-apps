import styled, { keyframes } from "styled-components";

export const SButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${({ theme, outline, variant, disabled }) =>
    disabled
      ? "gray"
      : outline
      ? theme.bg1
      : variant
      ? theme[variant]
      : theme.text};

  color: ${({ theme, outline, variant }) =>
    outline ? (variant ? theme[variant] : theme.text) : theme.bg1};

  outline: ${({ theme, outline, variant }) =>
    outline ? "2px solid " + (variant ? theme[variant] : theme.text) : "none"};
  outline-offset: -2px;
`;

const strokeOffset = keyframes`
  0%{stroke-dashoffset: 70px;transform:rotate(0deg)}
  50%{stroke-dashoffset: 35px;transform:rotate(180deg)}
  100%{stroke-dashoffset: 0px;transform:rotate(360deg)}
`;

export const SLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    stroke-dasharray: 35px;
    /* stroke-dashoffset: 70px; */
    animation: ${strokeOffset} 2s linear infinite;
  }
`;
