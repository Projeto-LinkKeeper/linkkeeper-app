import styled from "styled-components";

export const StyledUlGrid = styled.ul`
  display: flex;
  width: 90%;
  max-width: 780px;
  gap: 22px;

  margin-bottom: 50px;

  flex-wrap: wrap;
  padding: 40px;
  margin: 0 auto;
  background-color: var(--grey-3);
  justify-content: center;
`;

export const StyledCardGrid = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  position: relative;

  padding: 10px;

  line-height: 110%;
  width: 100%;
  max-width: 200px;
  height: 195px;
  padding: 10px;
  border: 1px solid var(--grey-0);
  border-radius: 4px;

  img {
    max-width: 100px;
    max-height: 70px;

    border-radius: 4px;
  }

  h3 {
    font-size: 12px;
    color: var(--grey-0);
  }

  a {
    text-decoration: none;
    color: var(--color-primary-focus);
    font-size: 10px;
  }

  p {
    font-size: 0.75rem;
    
    color: var(--grey-1);
  }

  button {
    color: var(--color-primary);
    position: absolute;
    right: 10px;
    bottom: 5px;

    font-size: 12px;
  }
  div{
    width:100%;
  }
`;

export const StyledFilter = styled.div`
  button {
    background-color: red;
  }
`;


