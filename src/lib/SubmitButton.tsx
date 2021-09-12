import { Button } from "@material-ui/core";
import { FC } from "react";

const SubmitButton: FC = () => {
  return (
    <Button variant="contained" color="primary" fullWidth={true} type="submit">
      Submit
    </Button>
  );
};
export default SubmitButton;
