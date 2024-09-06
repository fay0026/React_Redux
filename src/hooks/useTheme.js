import { useState } from "react";
import { createTheme } from "@mui/material/styles";

export default function useShowable(Light) {
  const [lightMode, switchMode] = useState(Light);

  const theme = createTheme({
    palette: {
      mode: lightMode,
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  function change() {
    if (lightMode === "light") {
      switchMode("dark");
    } else {
      switchMode("light");
    }
  }

  return {
    lightMode,
    theme,
    change,
  };
}
