import React from "react";
import UserShowcaseCard from "./UserShowcaseCard"
import img1 from "../../assets/icons/code.png"
import img2 from "../../assets/icons/github.png"
import img3 from "../../assets/icons/form.png"

function UserShowcaseSection() {

  return (
    <div>
      <h6 className="mb-3">Showcase your work from : </h6>
      <div className="my-project-container">
        <UserShowcaseCard image={img1} title={"Add Projects"} description={"Add your projects on portfolio"} url={"/dashboard/addprojects"} />
        <UserShowcaseCard image={img2}  title={"Github"} description={"Connect github with portfolio"} url={"/dashboard/connectgithub"} />
        <UserShowcaseCard image={img3}  title={"Personal Details"} description={"Add your personal details"} url={"/dashboard/addpersonaldetails/profile"} />
      </div>
    </div>
  );
}

export default UserShowcaseSection;
