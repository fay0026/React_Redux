// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
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
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const { theme, change } = useTheme(prefersDark === true ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <Main />
        <Footer toggleTheme={change} />
      </div>
    </ThemeProvider>
  );
}

export default App;
