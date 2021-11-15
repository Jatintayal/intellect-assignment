import React, { memo, useState } from "react";

const Widget2 = () => {
  const [topHighlight, setTopHighlight] = useState(0);
  const [selectedHighlight, setselectedHighlight] = useState(false);
  const widgetConfig = [
    { grayImg: "Path -3", whiteImg: "Path 4", width: "280px" },
    { grayImg: "Path -2", whiteImg: "Path 5", width: "220px" },
    { grayImg: "Path 3", whiteImg: "Path 6", width: "150px" },
    { grayImg: "Path -1", whiteImg: "Path 7", width: "100px" },
    { grayImg: "Polygon 1", whiteImg: "Polygon 2", width: "50px" },
  ];

  const showWhite = (num) => {
    return num <= topHighlight;
  };

  const setHighlights = (num, type) => {
    if (type === "hover" && num === 0) {
      setTopHighlight(selectedHighlight);
    } else if (type === "click") {
      setTopHighlight(num);
      setselectedHighlight(num);
    } else {
      setTopHighlight(num);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#325E6E",
        height: "350px",
        width: "350px",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "300px",
          width: "350px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="widget-2"
        onMouseLeave={() => setHighlights(0, "hover")}
      >
        {widgetConfig.map((config, index) => (
        <div
          onMouseEnter={() => setHighlights(5 - index, "hover")}
          onClick={() => setHighlights(5 - index, "click")}
        >
          {showWhite(5 - index) ? (
            <img src={`/assets/widget2/${config.whiteImg}.svg`} alt="" width={config.width} />
          ) : (
            <img src={`/assets/widget2/${config.grayImg}.svg`} alt="" width={config.width} />
          )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Widget2);
