import * as yup from "yup";

const formLoginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default formLoginSchema;
