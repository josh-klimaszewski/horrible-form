import { FC } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import ComposedTextField from "./ComposedTextField";
import { useHorribleErrors } from "../lib/useHorribleErrors";
import ErrorContainer from "./ErrorContainer";
import SubmitButton from "./SubmitButton";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: 500,
    width: "100%",
    padding: theme.spacing(3),
  },
}));

const validation = Yup.object().shape({
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

export type FormValues = {
  name: string;
  password: string;
  confirmPassword: string;
};

const HorribleForm: FC = () => {
  const { paper } = useStyles();
  useHorribleErrors();
  return (
    <Formik<FormValues>
      validationSchema={validation}
      initialValues={{ name: "", password: "", confirmPassword: "" }}
      onSubmit={() => alert("you did it!")}
    >
      <Paper classes={{ root: paper }}>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} md={6}>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={12}>
                <Typography variant="h4">Horrible Form</Typography>
              </Grid>
              <Grid item={true} xs={12}>
                <Field name="name" label="Name" component={ComposedTextField} />
              </Grid>
              <Grid item={true} xs={12}>
                <Field
                  name="password"
                  label="Password"
                  component={ComposedTextField}
                />
              </Grid>
              <Grid item={true} xs={12}>
                <Field
                  name="confirmPassword"
                  label="Confirm password"
                  component={ComposedTextField}
                />
              </Grid>
              <Grid item={true} xs={12}>
                <SubmitButton />
              </Grid>
            </Grid>
          </Grid>
          <Grid item={true} xs={12} md={6}>
            <ErrorContainer />
          </Grid>
        </Grid>
      </Paper>
    </Formik>
  );
};

export default HorribleForm;
