import styled from "styled-components";

export const StyledFilter = styled.div`
  width: 100%;
  border-bottom: 2px solid var(--grey-3);

  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;

  overflow-x: auto;

  button {
    background-color: var(--color-primary);
    padding: 5px 20px;
    border-radius: 12px;
    margin-bottom: 5px;
  }

  button:focus {
    border: 2px solid #fff;
    font-weight: 600;
  }
`;
