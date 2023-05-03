import styled from "styled-components";

export const StyledUlGrid = styled.ul`
  display: flex;
  width: 90%;
  max-width: 780px;
  gap: 22px;

  flex-wrap: wrap;
  padding: 15px;

  background-color: var(--grey-3);
`;

export const StyledCardGrid = styled.li`
  width: 168px;
  height: 128px;

  border: 1px solid var(--grey-0);
  border-radius: 4px;

  img {
    width: 110px;
    height: 61px;
  }

  h3 {
    font-size: 14px;
    color: var(--grey-0);
  }
`;

export const StyledFilter = styled.div`
  button{
    background-color: red;
  }`
