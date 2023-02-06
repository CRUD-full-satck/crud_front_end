import { FieldPath } from "react-hook-form";
import { IInputKeys, InputProps } from "./interface";

const Input = ({ required = false, type = "text", ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={props.id}>
        {props.label}
        {required && <span> *</span>}
      </label>
      <div>
        <input
          id={props.id}
          type={type}
          {...props.register(props.id as FieldPath<IInputKeys>)}
        />
        {props.error && <span>{props.error}</span>}
      </div>
    </div>
  );
};

export default Input;
