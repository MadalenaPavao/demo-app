import React, { FC } from "react";
// MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// Icons
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/logo.png";
// Local imports
import NavItem from "./NavItem";

const Nav: FC = () => {
  const logotype = (
    <Box
      component="img"
      sx={{
        height: 50,
      }}
      alt="Your logo."
      src={logo}
      mr={3}
    />
  );

  const appName = (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        display: { xs: "none", md: "flex" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "primary",
        textDecoration: "none",
      }}
    >
      Gene app
    </Typography>
  );

  const navItems = (
    <>
      {/*TODO add an archive ?*/}
      <NavItem to="/" Icon={HomeIcon} label="Home" />
      <NavItem to="/user" Icon={AccountCircleIcon} label="User" />
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "75px",
            }}
          >
            {logotype}
            {appName}
          </Box>
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          <Box sx={{ display: "flex", marginRight: "75px" }}>{navItems}</Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
