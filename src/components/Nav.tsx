import React, { FC, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavItem from "./NavItem";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Nav: FC = () => {
  useEffect(() => {
    console.log("Hello world");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <NavItem to="/" Icon={HomeIcon} label="Home" />
          <NavItem to="/menu" Icon={MenuBookIcon} label="Menu" />
          <Box style={{ display: "flex", flexGrow: 1 }} />
          <NavItem to="/user" Icon={AccountCircleIcon} label="User" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
