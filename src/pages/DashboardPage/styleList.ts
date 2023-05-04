import styled from "styled-components";

export const StyledGridControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  max-width: 780px;
  height: 60px;
  margin: 0 auto;
  color: var(--grey-0);

  button {
    color: var(--color-primary);
    text-decoration: underline;
    font-weight: bold;
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
  max-width: 780px;

  margin-bottom: 50px;

  padding: 40px;
  margin: 0 auto;
  background-color: var(--grey-3);
  justify-content: center;

  align-items: center;
`;

export const StyledCardList = styled.li`
  color: var(--grey-0);

  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
  line-height: 130%;

  width: 90%;
  max-width: 618px;
  margin: 0 auto;
  padding: 15px;

  border: 1px solid var(--grey-0);
  border-radius: 4px;

  img {
    max-width: 169px;
    max-height: 92px;

    border-radius: 4px;
  }

  h3 {
    font-size: 0.875rem;
  }

  p {
    font-size: 0.75rem;
    width: 300px;

    color: var(--grey-1);
  }

  a {
    text-decoration: none;
    color: var(--color-primary-focus);
  }

  button {
    color: var(--color-primary);
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;
