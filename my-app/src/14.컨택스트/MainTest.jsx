import React from "react";
import ThemeTest from "./ThemeTest";


const ThemeContext= React.createContext('dark');
function MainTest(props) {
  return (
    <div>
      <p>안녕하세요 테마변경</p>
      <ThemeContext.Provider value="dark">
        <ThemeTest />
      </ThemeContext.Provider>
      {/* <button onClick={toggleTheme}>테마변경</button> */}
    </div>
  );
}

export default MainTest;