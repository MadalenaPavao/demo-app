import React, { FC } from "react";
//Navigation
import { To } from "history";
import { Link as RouterLink, resolvePath, useMatch } from "react-router-dom";
//MUI components
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export type NavItemProps = {
  label: string;
  to: To;
  Icon?: typeof SvgIcon;
};

const NavItem: FC<NavItemProps> = ({ to, label, Icon }) => {
  const matching = useMatch(resolvePath(to).pathname);

  return (
    <Tooltip title={label} placement="bottom">
      {Icon ? (
        <IconButton component={RouterLink} to={to}>
          <Icon color={matching ? "primary" : "inherit"} />
        </IconButton>
      ) : (
        <Button component={RouterLink} to={to} color={matching ? "primary" : "inherit"}>
          {label}
        </Button>
      )}
    </Tooltip>
  );
};

export default NavItem;
