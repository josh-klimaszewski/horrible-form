import { FormikErrors, useFormikContext } from "formik";
import { usePrevious } from "../../../../lib/hooks/usePrevious";
import { useEffect, useState } from "react";
import { FormValues } from "../../../../lib/types";

type MetaError = {
  name: string;
  error: string;
  clean: boolean;
};

export const useHorribleFormikErrors = () => {
  const formikContext = useFormikContext<FormValues>();
  const values = formikContext?.values;
  const errors = formikContext?.errors;
  const prevErrors = usePrevious<FormikErrors<FormValues>>(errors);
  const [metaErrors, setMetaErrors] = useState<MetaError[]>([]);

  useEffect(() => {
    // if errors change, compare to meta errors

    if (errors !== prevErrors) {
      // clear password errors except required if no password in values

      if (
        errors?.password !== prevErrors?.password &&
        metaErrors.some((e) => e.name === "password") &&
        values &&
        !values.password
      ) {
        setMetaErrors((prev) =>
          prev
            .filter(
              (e) => e.name !== "password" || e.error.includes("required")
            )
            .map((e) =>
              e.error.includes("required") && e.name === "password"
                ? { ...e, clean: false }
                : e
            )
        );
      } else {
        const errorEntries = Object.entries(errors);
        const newMetaErrors = metaErrors.map((error) => {
          let cleaned = true;
          errorEntries.forEach((entry) => {
            // if error has disappeared, set clean to true in meta errors

            if (entry[0] === error.name && entry[1] === error.error) {
              cleaned = false;
            }
          });
          return { ...error, clean: cleaned };
        });

        // push any first new error to meta errors and break from loop

        errorEntries.forEach((key) => {
          if (
            errors &&
            !newMetaErrors.some(
              (error) => error.name === key[0] && error.error === key[1]
            )
          ) {
            newMetaErrors.push({
              name: key[0],
              error: key[1],
              clean: false,
            });
            return;
          }
        });

        setMetaErrors(newMetaErrors);
      }
    }
  }, [errors, metaErrors, prevErrors, values]);

  return metaErrors;
};
