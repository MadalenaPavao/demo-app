import React, { FC } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Box from "@mui/material/Box";
import { NEWS_ITEMS } from "../data/news";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home: FC = () => {
  const itemData = NEWS_ITEMS;
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
        Featured
      </Typography>
      <Box sx={{ alignSelf: "center" }}>
        <ImageList sx={{ width: 1000, height: 300 }} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.imageURL}>
              <img
                src={`${item.imageURL}?w=248&fit=crop&auto=format`}
                srcSet={`${item.imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.description}
                actionIcon={
                  <IconButton
                    component={RouterLink}
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                    to={`/item/${item.id}`}
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

export default Home;
