import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type LineProps = {
  title: string;
  info: string;
};

const Line: FC<LineProps> = ({ title, info }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0px 10px",
      }}
    >
      <Box>
        <Typography gutterBottom variant="button" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
      </Box>
      <Box style={{ justifyContent: "flex-end" }}>
        <Typography
          style={{ textAlign: "right" }}
          variant="button"
          gutterBottom
        >
          {info}
        </Typography>
      </Box>
    </Box>
  );
};

export default Line;
