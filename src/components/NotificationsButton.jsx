import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Notif from "@mui/icons-material/Notifications";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide, remove } from "../store/slices/notifications";
import Toast from "./Toast";

export default function NotifButton() {
  const stored = useSelector((state) => state.lastId);
  const dispatch = useDispatch();

  const cacher = () => {
    dispatch(
      hide({
        action: {
          stored,
        },
      }),
    );
  };

  const supprimer = () => {
    dispatch(
      remove({
        action: {
          stored,
        },
      }),
    );
  };

  return (
    <div>
      <Button>
        <Badge badgeContent={stored} color="primary">
          <Notif />
        </Badge>
      </Button>

      <Toast duration={4000} cacher={cacher} supprimer={supprimer} />
    </div>
  );
}
