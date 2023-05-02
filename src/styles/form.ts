import styled from "styled-components";

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
  position: relative;

  background-color: var(--grey-3);

  color: var(--grey-0);

  width: 90%;
  max-width: 369px;

  border-radius: 4px;
  padding: 34px 18px 34px 18px;
  margin: 0 auto;

  margin-bottom: 50px;

  h3 {
    align-self: center;
  }

  span {
    align-self: center;
    color: var(--grey-1);
    font-size: 14px;
  }

  .registerLink {
    text-decoration: none;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    height: 48px;
    width: 100%;

    border-radius: 4px;
    padding: 0px 22px;

    font-size: 1rem;

    border: solid 1px var(--grey-0);
    color: var(--grey-0);
  }
`;
