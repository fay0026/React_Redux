import { React } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material";
import useShowable from "../../hooks/useTheme";
import ThemeContext from ".";
import store from "../../store/index";

export default function Provider({ children }) {
  const themeContent = useShowable();

  return (
    <ThemeContext.Provider value={themeContent} store={store}>
      <ThemeProvider theme={themeContent.theme}>
        <section className="section">{children}</section>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
