import * as Yup from "yup";

export const validation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Must contain at least 8 characters")
    .matches(/(?=.*?[A-Z])/, "Must contain an uppercase letter")
    .matches(/(?=.*?[a-z])/, "Must contain a lowercase letter")
    .matches(/(?=.*?[0-9])/, "Must contain a digit")
    .matches(/(?=.*?[#?!@$%^&*-])/, "Must contain a special character")
    .matches(
      /^[0-9a-z].*[0-9a-z]$/i,
      "Special characters cannot be at the beginning or end"
    ),
  confirmPassword: Yup.string().test(
    "is-same-as-password",
    "Passwords must match",
    (value, context) => value === context.parent["password"]
  ),
});
