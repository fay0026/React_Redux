import Button from "@mui/material/Button";
import DsL from "@mui/icons-material/Dangerous";
import Prob from "@mui/icons-material/ReportProblem";
import Info from "@mui/icons-material/Info";
import Good from "@mui/icons-material/ThumbUpAlt";
import * as React from "react";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

export default function ButtonUsage() {
  const dispatch = useDispatch();
  let counter = 0;

  return (
    <main className="app__main">
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              id: counter,
              content: "ERROR",
              type: <Alert severity="error" />,
              isDisplayed: true,
            }),
          );
          counter += 1;
        }}
      >
        <DsL />
        ERROR
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              id: counter,
              content: "WARNING",
              type: <Alert severity="warning" />,
              isDisplayed: true,
            }),
          );
          counter += 1;
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
