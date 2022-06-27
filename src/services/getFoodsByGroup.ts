import { FOODS } from "../data/foods";

const getFoodsByGroup = (groupId: number) => {
  const filteredFoods = FOODS.filter((food) => food.groupId === groupId);
  return filteredFoods;
};
export default getFoodsByGroup;
