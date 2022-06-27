import React, { FC } from "react";
//MUI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//Icons
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuBookIcon from "@mui/icons-material/MenuBook";
//Local imports
import NavItem from "./NavItem";

const Nav: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box ml={5} />
          <NavItem to="/" Icon={HomeIcon} label="Home" />
          <NavItem to="/meals" Icon={MenuBookIcon} label="Meals" />
          <Box style={{ display: "flex", flexGrow: 1 }} />
          <NavItem to="/cart" Icon={ShoppingCartIcon} label="Cart" />
          <NavItem to="/user" Icon={AccountCircleIcon} label="User" />
          <Box mr={5} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
