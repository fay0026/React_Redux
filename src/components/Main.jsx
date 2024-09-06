import Button from "@mui/material/Button";
import DsL from "@mui/icons-material/Dangerous";
import Prob from "@mui/icons-material/ReportProblem";
import Info from "@mui/icons-material/Info";
import Good from "@mui/icons-material/ThumbUpAlt";
import * as React from "react";

export default function ButtonUsage() {
  return (
    <main className="app__main">
      <Button variant="outlined">
        <DsL />
        ERROR
      </Button>
      <Button variant="outlined">
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
