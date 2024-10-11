import Button from "@mui/material/Button";
import DsL from "@mui/icons-material/Dangerous";
import Prob from "@mui/icons-material/ReportProblem";
import Info from "@mui/icons-material/Info";
import Good from "@mui/icons-material/ThumbUpAlt";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// import Alert from "@mui/material/Alert";
import { create } from "../store/slices/notifications";

export default function ButtonUsage() {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.notifList);
  const stored = useSelector((state) => state.lastId);

  return (
    <main className="app__main">
      <Button variant="outlined" onClick={() => dispatch({ type: "create" })}>
        <DsL />
        ERROR
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              action: {
                id: stored,
                content: "WARNING",
                // type: <Alert severity="warning" />,
                isDisplayed: true,
              },
            }),
          );
          console.log(currentState);
        }}
      >
        <Prob />
        WARNING
      </Button>

      <Button variant="outlined">
        <Info />
        INFO
      </Button>

      <Button variant="outlined">
        <Good />
        SUCCESS
      </Button>
    </main>
  );
}
