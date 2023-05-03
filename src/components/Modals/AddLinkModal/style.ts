import styled from "styled-components";

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(18, 18, 20, 0.5);

  .modal__container {
    background-color: white;
  }
`;
