import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Notif from "@mui/icons-material/Notifications";
import * as React from "react";
import { useSelector } from "react-redux";
import Toast from "./Toast";

export default function NotifButton() {
  const count = useSelector((state) => state.notifList.length);

  return (
    <div>
      <Button>
        <Badge badgeContent={count} color="primary">
          <Notif />
        </Badge>
      </Button>

      <Toast duration={1000} />
    </div>
  );
}
