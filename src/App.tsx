import React, { FC } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import { makeStyles, DefaultTheme } from "@material-ui/styles";
import HorribleForm from "./components/HorribleForm";

const useStyles = makeStyles((theme: DefaultTheme) => ({
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
