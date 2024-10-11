/* eslint-disable react/require-default-props */
import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useSelector } from "react-redux";

export default function Toast({ duration, cacher, supprimer }) {
  const [open, setOpen] = React.useState(true);

  const stored = useSelector((state) => state.notifList);
  const id = useSelector((state) => state.lastId);

  const handleClose = () => {
    setOpen(false);
    cacher(setOpen);
  };

  if (stored.length !== 0) {
    const lastStored = stored[id - 1].action;

    return (
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <Alert
          severity={lastStored.content}
          onClose={supprimer}
          variant="filled"
        >
          {lastStored.content} {lastStored.id}
        </Alert>
      </Snackbar>
    );
  }
}

Toast.propTypes = {
  duration: PropTypes.number,
  cacher: PropTypes.func,
  supprimer: PropTypes.func,
};
