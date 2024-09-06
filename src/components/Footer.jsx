import Button from "@mui/material/Button";
import Mooooooon from "@mui/icons-material/DarkMode";
import SUN from "@mui/icons-material/LightMode";
import Notif from "@mui/icons-material/Notifications";

import * as React from "react";

export default function ButtonUsage(changeLight, status) {
  const [light, setLight] = useState(status);

  const clickHandler = () => {};

  return (
    <footer className="app__footer footer">
      <Button variant="text" onClick={changeLight}>
        <Mooooooon />
      </Button>
      <Button variant="text">
        <Notif />
      </Button>
    </footer>
  );
}
