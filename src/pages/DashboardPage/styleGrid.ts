import styled from "styled-components";

export const StyledUlGrid = styled.ul`
  display: flex;
  width: 90%;
  max-width: 780px;
  gap: 22px;

  flex-wrap: wrap;
  padding: 15px;
  margin: 0 auto;
  background-color: var(--grey-3);
  justify-content: center;
`;

export const StyledCardGrid = styled.li`
  width: 250px;
  height: 195px;
  padding: 10px;
  border: 1px solid var(--grey-0);
  border-radius: 4px;
  img {
    width: 180px;
    height: 90px;
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
