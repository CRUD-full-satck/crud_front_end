import * as yup from "yup";

const formUpdateContactSchema = yup.object().shape({
  name: yup.string().max(100, "Name too long, if you want you can abbreviate"),
  email: yup.string().email("Must be of type E-mail"),
  phone: yup.string(),
});

export default formUpdateContactSchema;
