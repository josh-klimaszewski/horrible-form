import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import { FC } from "react";
import { FormValues } from "./HorribleForm";

const SubmitButton: FC = () => {
  const { submitForm } = useFormikContext<FormValues>();
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth={true}
      onClick={submitForm}
    >
      Submit
    </Button>
  );
};
export default SubmitButton;
