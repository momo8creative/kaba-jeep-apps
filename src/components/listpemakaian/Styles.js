import styled from "styled-components";

export const SListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SListItem = styled.li`
  position: relative;
  background-color: ${({ theme }) => theme.bg1};
`;

export const SListItemButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
`;

export const SListItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const SListItemFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.bg2};
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;
