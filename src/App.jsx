import { React } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Provider from "./context/theme/Provider";

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
