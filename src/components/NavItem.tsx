import React, { FC } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { To } from "history";
import { Link as RouterLink, resolvePath, useMatch } from "react-router-dom";
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
          {" "}
          <Icon color={matching ? "secondary" : "inherit"} />
        </IconButton>
      ) : (
        <Button component={RouterLink} to={to}>
          {label}
        </Button>
      )}
      {/*<ListItem button component={RouterLink} to={to}>
        {Icon ? (
          <ListItemIcon>
            <Icon color={matching ? "secondary" : "inherit"} />
          </ListItemIcon>
        ) : (
          <ListItemText primary={label} />
        )}
        </ListItem>*/}
    </Tooltip>
  );
};

export default NavItem;
