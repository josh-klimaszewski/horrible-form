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
      /^[0-9a-z].*[0-9a-z]$/,
      "Special characters cannot be at the beginning or end"
    ),
});

export type FormValues = {
  name: string;
  password: string;
};

const HorribleForm: FC = () => {
  const { paper } = useStyles();
  useHorribleErrors();
  return (
    <Formik<FormValues>
      validationSchema={validation}
      initialValues={{ name: "", password: "" }}
      onSubmit={() => alert("you did it!")}
    >
      {({ submitForm }) => (
        <Paper classes={{ root: paper }}>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} md={6}>
              <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                  <Typography variant="h4">Horrible Form</Typography>
                </Grid>
                <Grid item={true} xs={12}>
                  <Field
                    name="name"
                    label="Name"
                    component={ComposedTextField}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Field
                    name="password"
                    label="Password"
                    component={ComposedTextField}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth={true}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item={true} xs={12} md={6}>
              <ErrorContainer />
            </Grid>
          </Grid>
        </Paper>
      )}
    </Formik>
  );
};

export default HorribleForm;
