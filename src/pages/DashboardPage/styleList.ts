import styled from "styled-components";

export const StyledGridControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  margin: 0 auto;

  color: var(--grey-0);

  button {
    color: var(--grey-0);
  }

  .gridControls {
    display: flex;
    gap: 10px;
  }
`;

export const StyledUlList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;

  padding: 15px;
  margin: 0 auto;
  background-color: var(--grey-3);
  justify-content: center;

  align-items: center;
`;

export const StyledCardList = styled.li`
  color: var(--grey-0);

  display: flex;
  width: 90%;
  margin: 0 auto;
  padding: 10px;

  border: 1px solid var(--grey-0);
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 61px;
  }

  h3 {
    font-size: 16px;
  }
`;
