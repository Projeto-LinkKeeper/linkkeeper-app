import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyledInput } from "../../styles/input";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
}

export const Input = forwardRef(
  (
    { id, label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <div>
          {label ? <label>{label}</label> : null}
          <StyledInput ref={ref} {...rest} id={id} />
        </div>
        <p>{error ? <p>{error}</p> : null}</p>
      </div>
    );
  }
);
