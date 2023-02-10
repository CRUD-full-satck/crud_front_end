import { FieldPath } from "react-hook-form";
import { IInputKeys, InputProps } from "./interface";
import { InputBase, InputContainer, Error } from "./style";
import { BiErrorCircle } from "react-icons/bi";

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
        {props.error && (
          <Error>
            <BiErrorCircle />
            <span>{props.error}</span>
          </Error>
        )}
      </InputBase>
    </InputContainer>
  );
};

export default Input;
