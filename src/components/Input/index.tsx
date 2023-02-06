import { FieldPath } from "react-hook-form";
import { IInputKeys, InputProps } from "./interface";
import { ContainerInput, InputBase } from "./style";

const Input = ({ required = false, type = "text", ...props }: InputProps) => {
  return (
    <ContainerInput>
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
    </ContainerInput>
  );
};

export default Input;
