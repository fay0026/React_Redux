import Button from "@mui/material/Button";
import Mooooooon from "@mui/icons-material/DarkMode";
import Flare from "@mui/icons-material/Flare";
import Notif from "@mui/icons-material/Notifications";
import * as React from "react";
import ThemeContext from "../context/theme";

export default function ButtonUsage() {
  const { currentTheme, change } = React.useContext(ThemeContext);

  const boutonModeOfLight =
    currentTheme === "light" ? <Mooooooon /> : <Flare />;

  return (
    <footer className="app__footer footer">
      <Button variant="text" onClick={change}>
        {boutonModeOfLight}
      </Button>

      <Button variant="text">
        <Notif />
      </Button>
    </footer>
  );
}
