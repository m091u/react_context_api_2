// src/pages/HomePage.jsx
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

const profileImg = "https://i.imgur.com/i1gsj0v.png";

function HomePage() {
    const { theme } = useContext(ThemeContext); // <== UPDATE
   
    return (
      <div className={"HomePage " + theme}>    {/* <== UPDATE  */}
        <h1>Hi! My Name is ...</h1>
        <img src={profileImg} className="profile" alt="profile" />
      </div>
    );
  }
   
  export default HomePage;
