import * as yup from "yup";

const formRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required.")
    .max(100, "Name too long, if you want you can abbreviate."),
  email: yup.string().required("Email is required.").email("Must be of type E-mail."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(/[A-Z]/, "Must contain at least 1 capital letter")
    .matches(/([a-z])/, "Must contain at least 1 lowercase letter")
    .matches(/(\d)/, "Must contain at least 1 number")
    .matches(/(\W)|_/, "Must contain at least 1 special character")
    .matches(/.{8,}/, "Must contain at least 8 digits"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required.")
    .oneOf([yup.ref("password"), null], "Must be the same as the password."),
  phone: yup
    .string()
    .required("Phone is required.")
    .matches(
      /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "Invalid phone number."
    ),
});

export default formRegisterSchema;
