// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Provider from "./context/theme/Provider";
import useTheme from "./hooks/useTheme";

const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

const { change } = useTheme(prefersDark === true ? "dark" : "light");

function App() {
  return (
    <Provider>
      <CssBaseline />
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
