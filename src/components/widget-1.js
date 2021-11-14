import React, { memo, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Widget1 = () => {
  const [percent, setPercent] = useState(5);
  return (
    <div style={{backgroundColor: "#325E6E", height: "350px", width: "350px", position: "relative", marginBottom: "20px"}}>
      <div style={{height: "300px", width: "250px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <div style={{height: "250px", width: "250px", marginBottom: "20px"}}>
          <CircularProgressbar
            value={percent * 10}
            text={percent}
            strokeWidth="3"
            background="true"
            styles={{ path: { stroke: "white" }, trail: { stroke: "#325E6E" }, text: {fill: "white"}, background: {fill: "rgba(255,255,255, 0.1)"} }}
          />
        </div>
        <input
          type="range"
          min="0"
          max="10"
          value={percent}
          style={{width: "200px"}}
          onChange={(e) => setPercent(e.target.value)}
        />
        </div>
    </div>
  );
};

export default memo(Widget1);
