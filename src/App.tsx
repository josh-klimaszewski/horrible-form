import { FC } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HorribleForm from "./components/react-hook-form/HorribleForm";

const useStyles = makeStyles(() => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const App: FC = () => {
  const { container } = useStyles();
  return (
    <Container className={container}>
      <HorribleForm />
    </Container>
  );
};

export default App;
