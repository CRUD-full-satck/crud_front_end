import { FieldPath } from "react-hook-form";
import { IInputKeys, InputProps } from "./interface";

const Input = ({ required = false, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={props.value}>
        {props.label}
        {required && <span> *</span>}
      </label>
      <div>
        <input
          id={props.value}
          type={props.type}
          {...props.register(props.value as FieldPath<IInputKeys>)}
        />
        {props.error && <span>{props.error}</span>}
      </div>
    </div>
  );
};

export default Input;
