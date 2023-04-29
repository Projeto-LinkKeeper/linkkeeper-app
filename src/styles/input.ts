import styled from "styled-components";

export const StyledInput = styled.input`
  height: 48px;
  width: 100%;

  border-radius: 4px;
  border: none;

  padding: 0px 16px 0px 16px;
  margin: 10px 0;

  font-size: 1rem;

  position: relative;

  color: var(--grey-0);
  background-color: #1b1b1b;

  ::placeholder {
    color: var(--grey-1);
  }

  :hover {
    border: 1.22px solid var(--grey-0);
  }
`;
