import { FormValues } from "./../components/HorribleForm";
import { FormikErrors, useFormikContext } from "formik";
import { usePrevious } from "./usePrevious";
import { useEffect, useState } from "react";

type MetaError = {
  name: string;
  error: string;
  clean: boolean;
};

export const useHorribleErrors = () => {
  const formikContext = useFormikContext<FormValues>();
  const values = formikContext?.values;
  const errors = formikContext?.errors;
  const prevErrors = usePrevious<FormikErrors<FormValues>>(errors);

  const [metaErrors, setMetaErrors] = useState<MetaError[]>([]);

  useEffect(() => {
    // clear name errors except required if no name in values

    if (metaErrors.some((e) => e.name === "name") && values && !values.name) {
      setMetaErrors(
        metaErrors.filter(
          (e) => e.name !== "name" || e.error.includes("required")
        )
      );
    }
  }, [metaErrors, values]);

  useEffect(() => {
    // clear password errors except required if no password in values

    if (
      metaErrors.some((e) => e.name === "password") &&
      values &&
      !values.password
    ) {
      setMetaErrors(
        metaErrors.filter(
          (e) => e.name !== "password" || e.error.includes("required")
        )
      );
    }
  }, [metaErrors, values]);

  useEffect(() => {
    // if errors change, compare to meta errors

    if (errors !== prevErrors) {
      const errorEntries = Object.entries(errors);
      console.log({ errorEntries });
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
  }, [errors, metaErrors, prevErrors]);

  return metaErrors;
};
