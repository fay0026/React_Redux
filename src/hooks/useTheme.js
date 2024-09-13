import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme } from "@mui/material/styles";

export default function useShowable() {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  const [currentTheme, switchMode] = useState(prefersDark ? "dark" : "light");

  const theme = createTheme({
    palette: {
      mode: currentTheme,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return {
    currentTheme,
    theme,
    change: () => {
      // If currentTheme === "light" then = "dark" else = "light"
      switchMode(currentTheme === "light" ? "dark" : "light");
    },
  };
}
