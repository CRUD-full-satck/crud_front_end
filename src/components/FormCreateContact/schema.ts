import * as yup from "yup";

const formCreateContactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(100, "Name too long, if you want you can abbreviate"),
  email: yup.string().required("Email is required").email("Must be of type E-mail"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/, "Invalid phone number"),
});

export default formCreateContactSchema;
