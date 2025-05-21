import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import UserDashboardPage from "./pages/userPages/UserDashboardPage";
import Home from "./pages/clientPages/Home";
import NotFound from "./pages/clientPages/NotFound";
import ProtectUser from "./protect/ProtectUser";
import Signin from "./pages/clientPages/Signin";
import Signup from "./pages/clientPages/Signup";
import PortfolioPage from "./pages/userPages/PortfolioPage";

// import CSS
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard/*"
            element={
              <ProtectUser>
                <UserDashboardPage />
              </ProtectUser>
            }
          />
          <Route path="/:uname" element={<PortfolioPage />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
