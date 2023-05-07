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

export const StyledFormModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  color: var(--grey-0);

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

  select {
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
  }

  textarea {
    resize: none;

    height: 100px;
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
