import { React } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material";
import { Provider as ReduxProvider } from "react-redux";
import useShowable from "../../hooks/useTheme";
import ThemeContext from ".";
import store from "../../store/index";

export default function Provider({ children }) {
  const themeContent = useShowable();

  return (
    <ThemeContext.Provider value={themeContent}>
      <ThemeProvider theme={themeContent.theme}>
        <ReduxProvider store={store}>
          <section className="section">{children}</section>
        </ReduxProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
