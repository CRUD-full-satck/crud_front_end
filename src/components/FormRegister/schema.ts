import * as yup from "yup";

const formClientSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(100, "Name too long, if you want you can abbreviate"),
  email: yup.string().required("Email is required").email("Must be of type E-mail"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], ""),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number"),
});

export default formClientSchema;
