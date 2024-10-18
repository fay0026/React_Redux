import Button from "@mui/material/Button";
import DsL from "@mui/icons-material/Dangerous";
import Prob from "@mui/icons-material/ReportProblem";
import Info from "@mui/icons-material/Info";
import Good from "@mui/icons-material/ThumbUpAlt";
import * as React from "react";
import { useDispatch } from "react-redux";
import { create } from "../store/slices/notifications";

export default function ButtonUsage() {
  const dispatch = useDispatch();
  let countWarn = 1;
  let countInfo = 1;
  let countSucc = 1;

  return (
    <main className="app__main">
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              content: "my_error",
              isDisplayed: true,
              type: "error",
            }),
          );
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
              action: {
                id: countWarn,
                icon: "Prob",
                content: "warning",
                isDisplayed: true,
              },
            }),
          );
          countWarn += 1;
        }}
      >
        <Prob />
        WARNING
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              action: {
                id: countInfo,
                icon: "Info",
                content: "info",
                isDisplayed: true,
              },
            }),
          );
          countInfo += 1;
        }}
      >
        <Info />
        INFO
      </Button>

      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              action: {
                id: countSucc,
                icon: "Good",
                content: "success",
                isDisplayed: true,
              },
            }),
          );
          countSucc += 1;
        }}
      >
        <Good />
        SUCCESS
      </Button>
    </main>
  );
}
