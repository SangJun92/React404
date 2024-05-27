import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {
  //   const [temperature, setTemperature] = useState("");

  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);
  };

  //   const handleChange = (event) => {
  //     setTemperature(event.target.value);
  //   };

  return (
    <fieldset>
      <legend>온도를 입력하세요(단위 :{scaleNames[props.scale]}) </legend>
      <input value={props.temperature} onChange={handleChange} />
      {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
    </fieldset>
  );
}

export default TemperatureInput;
