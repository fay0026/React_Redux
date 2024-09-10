import Button from "@mui/material/Button";
import Mooooooon from "@mui/icons-material/DarkMode";
import Notif from "@mui/icons-material/Notifications";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import * as React from "react";

export default function ButtonUsage({ toggleTheme }) {
  return (
    <footer className="app__footer footer">
      <Button variant="text" onClick={toggleTheme}>
        <Mooooooon />
      </Button>
      <Button variant="text">
        <Notif />
      </Button>
    </footer>
  );
}

ButtonUsage.propTypes = {
  toggleTheme: PropTypes.func,
};

ButtonUsage.defaultProps = {
  toggleTheme: null,
};
