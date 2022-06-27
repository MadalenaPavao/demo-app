import React, { FC } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import { MEAL_GROUPS } from "../data/meal_groups";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Meals: FC = () => {
  const itemData = MEAL_GROUPS;
  return (
    <Box
      sx={{
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" m={5}>
        Meals
      </Typography>
      <Box sx={{ alignSelf: "center" }}>
        <ImageList sx={{ width: 1000 }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.imageURL}>
              <img
                src={`${item.imageURL}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.label}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.label}
                actionIcon={
                  <IconButton
                    component={RouterLink}
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.label}`}
                    to={`/meals/${item.id}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Meals;
