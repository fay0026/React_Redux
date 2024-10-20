import Button from "@mui/material/Button";
import Mooooooon from "@mui/icons-material/DarkMode";
import Flare from "@mui/icons-material/Flare";
import * as React from "react";
import ThemeContext from "../context/theme";
import { Drawer } from "@mui/material";

export default function ButtonUsage() {
  const Notif = useSelector();
  const [open, setOpen] = useState(false);

  const { currentTheme, change } = React.useContext(ThemeContext);

  const boutonModeOfLight =
    currentTheme === "light" ? <Mooooooon /> : <Flare />;

  return (
    <footer className="app__footer footer">
      <Button variant="text" onClick={change}>
        {boutonModeOfLight}
      </Button>

      <Drawer open={open} onClose={setOpen(false)}></Drawer>

      <NotifButton />
    </footer>
  );
}
