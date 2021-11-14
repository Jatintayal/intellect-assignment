import React, { memo, useState } from "react";

const Widget2 = () => {
  const [topHighlight, setTopHighlight] = useState(0);

  const showWhite = (num) => {
    return num <= topHighlight;
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
        onMouseLeave={() => setTopHighlight(0)}
      >
        <div onMouseEnter={() => setTopHighlight(5)}>
          {showWhite(5) ? (
            <img src="/assets/widget2/Path 4.svg" alt="" width="280px" />
          ) : (
            <img src="/assets/widget2/Path -3.svg" alt="" width="280px" />
          )}
        </div>
        <div onMouseEnter={() => setTopHighlight(4)}>
          {showWhite(4) ? (
          <img src="/assets/widget2/Path 5.svg" alt="" width="220px" />
          ) : (
            <img src="/assets/widget2/Path -2.svg" alt="" width="220px" />
          )}
        </div>
        <div onMouseEnter={() => setTopHighlight(3)}>
          {showWhite(3) ? (
          <img src="/assets/widget2/Path 6.svg" alt="" width="150px" />
          ) : (
            <img src="/assets/widget2/Path 3.svg" alt="" width="150px" />
          )}
        </div>
        <div onMouseEnter={() => setTopHighlight(2)}>
          {showWhite(2) ? (
          <img src="/assets/widget2/Path 7.svg" alt="" width="100px" />
          ) : (
            <img src="/assets/widget2/Path -1.svg" alt="" width="100px" />
          )}
        </div>
        <div onMouseEnter={() => setTopHighlight(1)}>
          {showWhite(1) ? (
          <img src="/assets/widget2/Polygon 2.svg" alt="" width="50px" />
          ) : (
            <img src="/assets/widget2/Polygon 1.svg" alt="" width="50px" />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Widget2);
