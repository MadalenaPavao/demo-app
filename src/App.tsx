import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme-provider";
import Nav from "./components/navigation/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import FoodsList from "./pages/FoodsList";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/meals/:mealId" element={<FoodsList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
