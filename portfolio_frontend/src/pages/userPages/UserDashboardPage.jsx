import React from "react";
import Header from "../../Components/miscComponents/Header";
import Panel from "../../Components/miscComponents/Panel";
import UserDashboard from "../../Components/userDashboard/UserDashborad";
import UserFooter from "../../Components/miscComponents/UserFooter";
import UserWelcomeBackCard from "../../Components/miscComponents/UserWelcomeBackCard";
import { Route, Switch, BrowserRouter, Routes } from "react-router-dom";
import UserThemeSection from "../../Components/userThemes/UserThemeSection";
import UserSearchSection from "../../Components/userSearch/UserSearchSection";
import UserProjectSearchSection from "../../Components/userProjects/UserProjectSearchSection";
import UserMyNetworkSection from "../../Components/userMyNetwork/UserMyNetworkSection";
import AddProjectComponent from "../../Components/userAddstuffs/AddProjectComponent";
import AddPersonalDetails from "../../Components/userAddstuffs/AddPersonalDetails";
import UserProjectPage from "./UserProjectPage";
import UserProfilePage from "./UserProfilePage";
import UserEditProject from "../../Components/userDashboard/UserEditProject";
import ConnectGithub from "../../Components/userAddstuffs/ConnectGithub";



function UserHomePage() {
  return (
    <>
      <Header />
      <Panel />
      <div className="main pd-top-15">
        {/* Left side */}
        <div className="left-side">
          <UserWelcomeBackCard />
          <UserFooter />
        </div>

        {/* Right side */}
        <div className="right-side">
          <Routes>
            <Route path="/home" element={<UserDashboard />} />
            <Route path="/themes" element={<UserThemeSection />} />
            <Route path="/search" element={<UserSearchSection />} />
            <Route path="/projects" element={<UserProjectSearchSection />} />
            <Route path="/mynetwork/*" element={<UserMyNetworkSection />} />
            <Route path="/addprojects" element={<AddProjectComponent />} />
            <Route path="/projects/:uid/:pid" element={<UserProjectPage />} />
            <Route path="/user/:id" element={<UserProfilePage />} />
            <Route path="/editproject/:uid/:pid" element={<UserEditProject/>} />
            <Route
              path="/addpersonaldetails/*"
              element={<AddPersonalDetails />}
            />
            <Route
              path="/connectgithub"
              element={<ConnectGithub/>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
