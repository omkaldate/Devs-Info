import React, { useState, useEffect } from "react";
import MainTheme_theme1 from "../../themes/theme1/MainTheme_theme1";
import MainTheme_theme2 from "../../themes/theme2/MainTheme_theme2";
import { useNavigate, useParams } from "react-router-dom";
import { getUserName } from "../../api/UserApi";

function PortfolioPage() {
  const { uname } = useParams();
  const navigate = useNavigate();

  const [userTheme, setUserTheme] = useState(1);
  const [userState, setUserState] = useState(false);
  const [userMessage, setUserMessage] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getUserName(uname);
      const data = result.data;
      if (data != null && data.success) {
        setUserTheme(data.data.u_theme);
        setUserState(true);
        console.log(data.data.u_theme);
        // alert(data.data)
      } else {
        // alert("User not found");
        setUserMessage(true);
        navigate("/");
      }
    })();
  }, []);
  if (userMessage) {
    return (
      <div className="flex center mt-5">
       <div>
       <div> <h2>User not found</h2></div>
       </div>
       
      </div>
    );
  }
  if (userState == true && userTheme == 1) {
    return <MainTheme_theme1 />;
  } else if (userState == true && userTheme == 2) {
    console.log("inn");
    return <MainTheme_theme2 />;
  } else {
    return <div className="flex center mt-5">Loading</div>;
  }
}

export default PortfolioPage;
