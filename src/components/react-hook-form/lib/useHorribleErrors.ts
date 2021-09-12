import { usePrevious } from "../../../lib/hooks/usePrevious";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import get from "lodash/get";
import { MetaError } from "../../../lib/types";

export const useHorribleErrors = () => {
  const {
    formState: { errors },
  } = useFormContext();
  const [metaErrors, setMetaErrors] = useState<MetaError[]>([]);

  const handleErrors = useCallback(
    (name: string, error: string, prevError: string) => {
      if (!!(error || prevError) && error !== prevError) {
        const newMetaErrors = [...metaErrors];

        if (
          !!error &&
          !metaErrors.some((metaError) => metaError.error === error)
        ) {
          newMetaErrors.push({
            name,
            error,
            clean: false,
          });
        }

        setMetaErrors(
          newMetaErrors.map((metaError) => {
            if (metaError.error === prevError) {
              return { ...metaError, clean: true };
            }
            if (metaError.error === error) {
              return { ...metaError, clean: false };
            }
            return metaError;
          })
        );
      }
    },
    [metaErrors]
  );

  const nameError = get(errors, "name.message");
  const prevNameError = usePrevious(nameError);

  useEffect(() => {
    handleErrors("name", nameError, prevNameError);
  }, [nameError, prevNameError, handleErrors]);

  const passwordError = get(errors, "password.message");
  const prevPasswordError = usePrevious(passwordError);

  useEffect(() => {
    handleErrors("password", passwordError, prevPasswordError);
  }, [passwordError, prevPasswordError, handleErrors]);

  const passwordConfirmError = get(errors, "confirmPassword.message");
  const prevPasswordConfirmError = usePrevious(passwordConfirmError);

  useEffect(() => {
    handleErrors(
      "confirmPassword",
      passwordConfirmError,
      prevPasswordConfirmError
    );
  }, [passwordConfirmError, prevPasswordConfirmError, handleErrors]);

  return metaErrors;
};
