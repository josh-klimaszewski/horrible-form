import { FC } from "react";
import { Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { Formik, Field } from "formik";
import ComposedTextField from "./lib/ComposedTextField";
import SubmitButton from "../../lib/SubmitButton";
import FormikErrorContainer from "./FormikErrorContainer";
import { validation } from "../../lib/utils";
import { FormValues } from "../../lib/types";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: 500,
    width: "100%",
    padding: theme.spacing(3),
  },
}));

const HorribleForm: FC = () => {
  const { paper } = useStyles();
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
            <FormikErrorContainer />
          </Grid>
        </Grid>
      </Paper>
    </Formik>
  );
};

export default HorribleForm;
