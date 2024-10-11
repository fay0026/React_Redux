import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Notif from "@mui/icons-material/Notifications";
import * as React from "react";
import { useSelector } from "react-redux";

export default function NotifButton() {
  const stored = useSelector((state) => state.lastId);
  console.log(stored);

  return (
    <Button>
      <Badge badgeContent={stored} color="primary">
        <Notif />
      </Badge>
    </Button>
  );
}
