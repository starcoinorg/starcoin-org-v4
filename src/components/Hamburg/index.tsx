import React, { useState } from "react";
import "./Hamburg.css";

export default function Hamburg() {
  const [isPressed, setIsPressed] = useState(false);

  // 需要通过 JS 将 aria-pressed 根据点击事件，在 true 和 false 之间切换
  const handleClick = () => {
    setIsPressed(!isPressed); // 在点击时将 isPressed 的值取反
    console.log(isPressed)
  };
  return (
    <button className="hamburg" aria-pressed={isPressed} onClick={handleClick}> 
      <svg aria-hidden="true" viewBox="0 0 24 24" className="icon--hamburg">
        <g fill="var(--fill-color)">
          <rect width="18" height="1.5" ry="0.75" x="3" y="6.25" />
          <rect width="18" height="1.5" ry="0.75" x="3" y="11.25" />
          <rect width="18" height="1.5" ry="0.75" x="3" y="16.25" />
        </g>
      </svg>
    </button>
  );
}
