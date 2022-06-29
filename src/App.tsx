import React, { FC } from "react";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Theme
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme-provider";
// Local components
import Nav from "./components/navigation/Nav";
import AnalysisDashboard from "./pages/AnalysisDashboard";
import Profile from "./pages/Profile";
import AnalysisDetail from "./pages/AnalysisDetail";

const App: FC = () => {
  return (
    <div style={{ backgroundColor: "#FFFFFB", height: "100vh" }}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Nav />
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<AnalysisDashboard />} />
          <Route path="/analysis/:analysisId" element={<AnalysisDetail />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
