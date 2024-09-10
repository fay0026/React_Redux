import { React } from "react";
import PropTypes from "prop-types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material";
import useTheme from "../../hooks/useTheme";

export default function Provider({ children }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  // eslint-disable-next-line no-unused-vars
  const { currentTheme, theme, change } = useTheme(
    prefersDark === true ? "dark" : "light",
  );

  return (
    <ThemeProvider theme={theme}>
      <section className="section">{children}</section>
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf,
};

Provider.defaultProps = {
  children: null,
};
