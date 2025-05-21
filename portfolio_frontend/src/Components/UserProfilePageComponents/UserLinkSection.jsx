import React from "react";
import UserLinkCard from "../userDashboard/UserLinkCard";
import leetcode from "../../assets/icons/leetcode.png"
import codeforces from "../../assets/icons/codeforces.png"
import gfgImg from "../../assets/icons/gfg.png"
import linkedin from "../../assets/icons/linkedin.png"

function UserLinkSection({lc, gfg, cf, li}) {
  return (
    <>
      <div>
        <h6 className="mb-3">Links : </h6>
        <div className="flex">
          <UserLinkCard image={leetcode} title={"Leetcode"} link={lc} />
          <UserLinkCard image={codeforces} title={"Codeforces"} link={cf} />
          <UserLinkCard image={gfgImg} title={"Geeks for Geeks"} link={gfg} />
          <UserLinkCard image={linkedin} title={"LinkedIn"} link={li} />
        </div>
      </div>
    </>
  );
}

export default UserLinkSection;
