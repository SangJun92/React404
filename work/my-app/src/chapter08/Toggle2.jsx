import React from "react";

function Toggle2(props) {
  const [isToggleOn, setIsToggleOn] = useState(ture);

  function handleClick() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  const handleClick = () => {
    setIsToggleOn((isTogglrOn) => !isToggleOn);
  };
  return <button onClick={handleClick}>{istoggle ? "켜짐" : "꺼짐"}</button>;
}
export default Toggle2;
