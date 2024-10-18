/* eslint-disable react/require-default-props */
import { Alert, Snackbar } from "@mui/material";
import PropTypes from "prop-types";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, remove } from "../store/slices/notifications";

export default function Toast({ duration }) {
  const dispatch = useDispatch();

  const last = useSelector(
    (state) => state.notifList[state.notifList.length - 1],
  );

  if (!last || !last.isDisplayed) {
    return null;
  }

  return (
    <Snackbar
      open
      autoHideDuration={duration}
      onClose={() => {
        dispatch(hide(last.id));
      }}
    >
      <Alert
        severity={last.type}
        onClose={() => {
          dispatch(hide(last.id));
        }}
        variant="filled"
      >
        {last.content} {last.id}
      </Alert>
    </Snackbar>
  );
}

Toast.propTypes = {
  duration: PropTypes.number,
  hide: PropTypes.func,
  remove: PropTypes.func,
};
