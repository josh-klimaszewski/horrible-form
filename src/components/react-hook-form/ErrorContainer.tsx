import { FC } from "react";
import { useHorribleErrors } from "./lib/useHorribleErrors";
import ErrorRenderer from "../../lib/ErrorRenderer";

const ErrorContainer: FC = () => {
  const metaErrors = useHorribleErrors();
  return <ErrorRenderer metaErrors={metaErrors} />;
};

export default ErrorContainer;
