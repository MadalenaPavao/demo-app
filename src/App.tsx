import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Menu from "./components/Menu";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/user" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
