import { TextFieldProps, TextField } from "@material-ui/core";
import { FieldProps, getIn } from "formik";
import { FC } from "react";

const ComposedTextField: FC<FieldProps & TextFieldProps> = ({
  form: { handleChange, handleBlur, errors, touched },
  field: { name, value },
  ...props
}) => {
  const error = getIn(errors, name);
  const isTouched = getIn(touched, name);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
  };
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    handleBlur(event);
  };
  return (
    <TextField
      variant="outlined"
      error={!!error && isTouched}
      fullWidth={true}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      {...props}
    />
  );
};

export default ComposedTextField;
