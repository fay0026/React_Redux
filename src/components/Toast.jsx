/* eslint-disable react/require-default-props */
import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, remove } from "../store/slices/notifications";

export default function Toast({ duration }) {
  // possible en créant un useLastNotification dans le store
  const dispatch = useDispatch();

  const lastNotif = useSelector(
    (state) => state.notifList[state.notifList.length - 1],
  );

  if (!lastNotif || !lastNotif.isDisplayed) {
    // empêche la creation
    return null;
  }

  return (
    <Snackbar
      open
      autoHideDuration={duration}
      onClose={(reason) => {
        if (reason === "clickaway") {
          dispatch(hide(lastNotif.id));
        }
      }}
    >
      <Alert
        severity={lastNotif.type}
        onClose={(reason) => {
          if (reason !== "clickaway") {
            dispatch(remove(lastNotif.id));
          }
        }}
        variant="filled"
      >
        {lastNotif.content} {lastNotif.id}
      </Alert>
    </Snackbar>
  );
}

Toast.propTypes = {
  duration: PropTypes.number,
  hide: PropTypes.func,
  remove: PropTypes.func,
};
