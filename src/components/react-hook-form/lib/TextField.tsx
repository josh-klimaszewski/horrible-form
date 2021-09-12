import { TextFieldProps, TextField as MuiTextField } from "@material-ui/core";
import { Controller, Control } from "react-hook-form";
import get from "lodash/get";

type Props<T> = TextFieldProps & {
  control: Control<T>;
  dataTestId?: string;
};

const TextField = <
  TFormValues extends Record<string, any> = Record<string, any>
>({
  name,
  label,
  control,
  disabled,
  dataTestId = `${name}-text-input`,
  fullWidth = true,
  ...other
}: Props<TFormValues>) => {
  return (
    <Controller<TFormValues, any>
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <MuiTextField
          {...other}
          id={name}
          name={name}
          label={label}
          value={value}
          disabled={disabled}
          error={!!error}
          helperText={get(error, "message")}
          onChange={onChange}
          onBlur={onBlur}
          fullWidth={fullWidth}
          variant="outlined"
          FormHelperTextProps={{
            // @ts-ignore
            "data-testid": `${name}-helper-text`,
          }}
          inputProps={{
            "data-testid": dataTestId,
            "aria-disabled": disabled ?? false,
            "aria-label": label as string,
            "aria-describedby": other["aria-describedby"],
          }}
        />
      )}
    />
  );
};

export default TextField;
