import Button from "@mui/material/Button";
import Mooooooon from "@mui/icons-material/DarkMode";
import Notif from "@mui/icons-material/Notifications";
import * as React from "react";

export default function ButtonUsage() {
  return (
    <footer className="app__footer footer">
      <Button variant="contained">
        <Mooooooon />
      </Button>
      <Button variant="contained">
        <Notif />
      </Button>
    </footer>
  );
}
