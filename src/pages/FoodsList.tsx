import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getFoodsByGroup from "../services/getFoodsByGroup";
import { IFood } from "../types/IFood";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FoodsList: FC = () => {
  const { mealId } = useParams();
  const [meals, setMeals] = useState<IFood[]>();

  useEffect(() => {
    if (mealId) {
      setMeals(getFoodsByGroup(parseInt(mealId)));
    }
  }, [mealId]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
      m={5}
    >
      {meals &&
        meals.map((meal, index) => {
          return (
            <Card sx={{ width: 345, margin: "10px" }}>
              <CardMedia component="img" height="250" image={meal.image} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {meal.commercialLabel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {meal.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add to cart</Button>
              </CardActions>
            </Card>
          );
        })}
    </Box>
  );
};

export default FoodsList;
