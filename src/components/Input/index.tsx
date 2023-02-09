import { FieldPath } from "react-hook-form";
import { IInputKeys, InputProps } from "./interface";
import { InputBase, InputContainer } from "./style";

const Input = ({ required = false, type = "text", ...props }: InputProps) => {
  return (
    <InputContainer>
      <label htmlFor={props.id}>
        {props.label}
        {required && <span> *</span>}
      </label>
      <InputBase>
        <input
          id={props.id}
          type={type}
          {...props.register(props.id as FieldPath<IInputKeys>)}
        />
        {props.error && <span>{props.error}</span>}
      </InputBase>
    </InputContainer>
  );
};

export default Input;
