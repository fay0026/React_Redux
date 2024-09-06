// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useTheme from "./hooks/useTheme";
// import Theme from "./components/Theme";

/* const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
}); */

function App() {
  const [light, setLight] = useState("dark");

  const Theme = useTheme(light);

  return (
    <ThemeProvider theme={Theme.theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <Main />
        <Footer changeLight={setLight} status={light} />
      </div>
    </ThemeProvider>
  );
}

export default App;
