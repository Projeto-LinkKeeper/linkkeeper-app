import styled from "styled-components";

export const StyledHeader = styled.header`
  .loginHeader {
    height: 72px;
    width: 295.8px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }

  .registerHeader {
    height: 72px;
    width: 90%;
    max-width: 369px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
  }

  .homeHeader {
    height: 72px;
    width: 90%;
    max-width: 720px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
  }

  .backPageBtn,
  .logoutBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 32px;
    width: 79.5px;

    border-radius: 4px;
    padding: 0px 16px 0px 16px;

    color: var(--grey-0);
    font-size: 10px;

    background-color: var(--grey-3);
  }

  .paragraph{
    color: var(--color-primary);
    font-family: 'Noah', sans-serif;
  }
`;
