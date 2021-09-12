import { TextFieldProps, TextField as MuiTextField } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";
import get from "lodash/get";

type Props<T> = TextFieldProps & {
  control: Control<T>;
};

const TextField = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  name,
  label,
  control,
}: Props<TFormValues>) => (
  <Controller<TFormValues, any>
    name={name}
    control={control}
    render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
      <MuiTextField
        helperText={get(error, "message")}
        error={!!error}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        fullWidth={true}
        label={label}
        variant="outlined"
      />
    )}
  />
);

export default TextField;
