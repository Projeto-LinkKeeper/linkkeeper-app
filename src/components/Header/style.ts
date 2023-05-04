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

  .header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  background-color: rgb(5, 5, 5);
  color: #fff;

  }

  .header-left {
    display: flex;
    align-items: center;

  }

  .header-right {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .header-item {
    margin: 0.5rem 0;
    color: var(--color-primary);

  }

  .drop-down {
    position: relative;

  }

  .user-profile {
    display: flex;
    align-items: center;

    cursor: pointer;

  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    display: flex;
    flex-direction: column;

    background-color: #000;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);

    padding-right: 1rem;
    padding-left: 1rem;
    
  }

  .dropdown-item {
    margin: 0.5rem 0;
    border: none;

    background-color: transparent;
    
    cursor: pointer;

    color: var(--color-primary);

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

  .header-right{
    display: flex;

  }
`;
