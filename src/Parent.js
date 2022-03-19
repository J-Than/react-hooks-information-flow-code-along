import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState("#FFF");

  function handleChangeColor() {
    setColor(getRandomColor());
    setChildColor(getRandomColor());
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} childColor={childColor}/>
      <Child onChangeColor={handleChangeColor} childColor={childColor}/>
    </div>
  );
}

export default Parent;
