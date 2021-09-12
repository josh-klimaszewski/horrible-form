import { FC } from "react";
import ErrorRenderer from "../../lib/ErrorRenderer";
import { useHorribleFormikErrors } from "./lib/hooks/useHorribleFormikErrors";

const FormikErrorContainer: FC = () => {
  const metaErrors = useHorribleFormikErrors();
  return <ErrorRenderer metaErrors={metaErrors} />;
};

export default FormikErrorContainer;
