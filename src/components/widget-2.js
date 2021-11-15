import React, { memo, useState } from "react";

const Widget2 = () => {
  const [topHighlight, setTopHighlight] = useState(0);
  const [selectedHighlight, setselectedHighlight] = useState(false);

  const showWhite = (num) => {
    return num <= topHighlight;
  };

  const setHighlights = (num, type) => {
    if (type === 'hover' && num === 0) {
      setTopHighlight(selectedHighlight)
    } else if (type === 'click') {
      setTopHighlight(num)
      setselectedHighlight(num)
    } else {
      setTopHighlight(num)
    }
  }

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
        onMouseLeave={() => setHighlights(0, 'hover')}
      >
        <div onMouseEnter={() => setHighlights(5, 'hover')} onClick={() => setHighlights(5, 'click')}>
          {showWhite(5) ? (
            <img src="/assets/widget2/Path 4.svg" alt="" width="280px" />
          ) : (
            <img src="/assets/widget2/Path -3.svg" alt="" width="280px" />
          )}
        </div>
        <div onMouseEnter={() => setHighlights(4, 'hover')} onClick={() => setHighlights(4, 'click')}>
          {showWhite(4) ? (
          <img src="/assets/widget2/Path 5.svg" alt="" width="220px" />
          ) : (
            <img src="/assets/widget2/Path -2.svg" alt="" width="220px" />
          )}
        </div>
        <div onMouseEnter={() => setHighlights(3, 'hover')} onClick={() => setHighlights(3, 'click')}>
          {showWhite(3) ? (
          <img src="/assets/widget2/Path 6.svg" alt="" width="150px" />
          ) : (
            <img src="/assets/widget2/Path 3.svg" alt="" width="150px" />
          )}
        </div>
        <div onMouseEnter={() => setHighlights(2, 'hover')} onClick={() => setHighlights(2, 'click')}>
          {showWhite(2) ? (
          <img src="/assets/widget2/Path 7.svg" alt="" width="100px" />
          ) : (
            <img src="/assets/widget2/Path -1.svg" alt="" width="100px" />
          )}
        </div>
        <div onMouseEnter={() => setHighlights(1, 'hover')} onClick={() => setHighlights(1, 'click')}>
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
