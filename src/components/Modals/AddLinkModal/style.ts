import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(18, 18, 20, 0.5);

  .header__modal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    background-color: #343b41;

    color: var(--grey-0);
    font-size: 14px;
    font-weight: normal;

    height: 45px;
    width: 100%;
    max-width: 374px;

    border-radius: 4px 4px 0 0;

    button {
      color: var(--grey-0);
      font-size: 14px;
    }
  }

  .modal__container {
    background-color: #212529;

    width: 90%;
    max-width: 374px;
    height: 700px;

    border-radius: 4px;
  }
`;
