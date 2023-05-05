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
    flex-direction: row;
    align-items: center;

  }

  .header-item {
    margin: 0.5rem 0;
    color: var(--color-primary);

  }

  .search{
    color: var(--color-primary);
  }

  .userInfo{
    display: flex;
    align-items: center;
  }

  .user-profile {
    display: flex;
    align-items: center;

    cursor: pointer;

  }

  .img{
    margin-right: 10px;

  }

  .welcome{
    margin-right: 10px;
  }

  .close{
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
