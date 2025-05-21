import React, { useEffect, useState } from "react";
import UserThemeCard from "./UserThemeCard";
import { getAllThemes } from "../../api/themeApi";
import { ThreeDots } from "react-loader-spinner";
import themeImage1 from "../../assets/themeImages/themeImage1.png"

function UserThemeSection() {
  const [userThemes, setUserThemes] = useState([]);
  const [themeState, setThemeState] = useState(false);
  const [themeNumber, setThemeNumber] = useState(1);

  useEffect(() => {
    (async () => {
      const result = await getAllThemes();
      const data = result.data;
      if (data != null && data.success) {
        setUserThemes(data.data);
        setThemeNumber(data.theme_no);
        setThemeState(true);
      }
    })();
  }, []);

  return (
    <>
      <h5 className="mb-3">Themes</h5>
      <div class="row">
        {themeState ? (
          userThemes.map((result, index) => {
            console.log(result);
            return (
              <UserThemeCard
                key={index}
                theme_no={result.theme_no}
                selected={themeNumber == result.theme_no ? true : false}
                borderColor={
                  themeNumber == result.theme_no ? "border-primary" : ""
                }
                themeName={result.theme_name}
                themeImage1={themeImage1}
                themeDescription={result.theme_description}
              />
            );
          })
        ) : (
          <div style={{ marginLeft: "2px" }}>
            <ThreeDots
              height="30"
              width="30"
              radius="9"
              color="gray"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default UserThemeSection;
