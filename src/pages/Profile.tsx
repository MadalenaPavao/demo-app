import React, { FC } from "react";
// MUI components
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

/*
 * Page with the user's details:
 * name, email, laboratory, nb of performed analysis,
 * last performed analysis
 * */
const Profile: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "50px 100px",
      }}
    >
      <Typography variant="h5" mb={5} color="primary">
        My Profile
      </Typography>
    </Box>
  );
};

export default Profile;
