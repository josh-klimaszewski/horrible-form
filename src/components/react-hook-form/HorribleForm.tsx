import { FC } from "react";
import { Grid, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import SubmitButton from "../../lib/SubmitButton";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import TextField from "./lib/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorContainer from "./ErrorContainer";
import { validation } from "../../lib/utils";
import { FormValues } from "../../lib/types";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    minHeight: 500,
    width: "100%",
    padding: theme.spacing(3),
  },
}));

const defaultValues: FormValues = {
  name: "",
  password: "",
  confirmPassword: "",
};

const HorribleForm: FC = () => {
  const { paper } = useStyles();

  const methods = useForm<FormValues>({
    defaultValues,
    mode: "all",
    resolver: yupResolver(validation),
  });
  const { handleSubmit, control } = methods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert("you did it!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Paper classes={{ root: paper }}>
          <Grid container={true} spacing={3}>
            <Grid item={true} xs={12} md={6}>
              <Grid container={true} spacing={3}>
                <Grid item={true} xs={12}>
                  <Typography variant="h4">Horrible Form</Typography>
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField name="name" label="Name" control={control} />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    name="password"
                    label="Password"
                    control={control}
                  />
                </Grid>
                <Grid item={true} xs={12}>
                  <TextField
                    name="confirmPassword"
                    label="Confirm password"
                    control={control}
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
      </form>
    </FormProvider>
  );
};

export default HorribleForm;
