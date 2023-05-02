import styled, { css } from "styled-components";

interface IStyledButtonProps {
  $backgroundColor: "primary" | "primary-focus" | "disabled";
}

export const buttonStyles = css<IStyledButtonProps>`
  height: 48px;
  width: 100%;

  border-radius: 4px;
  padding: 0px 22px;

  font-size: 1rem;

  ${({ $backgroundColor }) => {
    switch ($backgroundColor) {
      case "primary":
        return css`
          background-color: var(--color-primary);
          color: var(--grey-3);
        `;
      case "primary-focus":
        return css`
          background-color: var(--color-primary-focus);
          color: var(--grey-3);
        `;
      case "disabled":
        return css`
          background-color: var(--color-primary-negative);
          color: var(--grey-1);
        `;
    }
  }}
`;

export const StyledSubmitButton = styled.button<IStyledButtonProps>`
  ${buttonStyles}
`;
