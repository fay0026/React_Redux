import { useState } from "react";
import { createTheme } from "@mui/material/styles";

export default function useShowable(light) {
  const [currentTheme, switchMode] = useState(light);

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
