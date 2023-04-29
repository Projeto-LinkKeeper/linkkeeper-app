import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react"

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
                    <input ref={ref} {...rest} id={id} />
                    {label ? <label>{label}</label> : null}
                </div>
                <p>{error ? <p>{error}</p> : null}</p>
            </div>
        );
    }
);

