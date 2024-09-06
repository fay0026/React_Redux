import { createTheme } from "@mui/material/styles";

export default function adjustTheme() {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });
  return theme;
}
