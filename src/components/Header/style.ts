import styled from "styled-components";

export const StyledHeader = styled.header`
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

  .loginHeader {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    max-width: 780px;
    margin: 0 auto;

    padding: 1rem 0;

    background-color: rgb(5, 5, 5);
    color: var(--grey-0);
  }

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .header-item {
    margin: 0.5rem 0;
    color: var(--color-primary);
  }

  .form {
    margin-right: 10px;
  }

  .filter__input {
    height: 30px;
    font-size: 12px;
    max-width: 200px;
    border-radius: 5px;
    background: transparent;
    border: 1px solid gray;
    color: white;
    :focus {
      outline: none;
    }

    padding: 0 10px;
    margin-right: 10px;
  }

  .search {
    color: var(--color-primary);
  }

  .userInfo {
    display: flex;
    align-items: center;
  }

  .user-profile {
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  .img {
    margin-right: 10px;
  }

  .welcome {
    border-left: 1px solid var(--grey-1);
    border-right: 1px solid var(--grey-1);
    font-size: 0.75rem;

    padding: 0 10px;
    span {
      color: var(--color-primary-focus);
      font-weight: bold;
    }
  }

  .close {
    color: var(--color-primary);

    padding: 0 10px;
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

  .header-right {
    display: flex;
  }

  @media (min-width: 580px) {
    .form {
      display: flex;
      gap: 10px;
    }
  }
`;
