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

  return (
    <main className="app__main">
      <Button
        variant="outlined"
        onClick={() => {
          dispatch(
            create({
              content: "error",
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
              content: "warning",
              isDisplayed: true,
              type: "warning",
            }),
          );
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
              content: "info",
              isDisplayed: true,
              type: "info",
            }),
          );
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
              content: "success",
              isDisplayed: true,
              type: "success",
            }),
          );
        }}
      >
        <Good />
        SUCCESS
      </Button>
    </main>
  );
}
