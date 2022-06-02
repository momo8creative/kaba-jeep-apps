import { css } from "styled-components";

export const v = {
  sidebarWidth: "20rem",
  mdWidth: "600px",

  absolute9: css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    height: 100%;
  `,

  fixed99: css`
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 99;
  `,
};

export const resetInput = css`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
`;
