import React, { useState } from "react";

const SetupPrint = () => {
  const [color, setColor] = useState("bw");
  return (
    <>
      <div className="d-flex my-3 setup row">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Colors:</span>
        </div>
        <div className="col-lg-9 d-flex ">
          <div
            className={`bwBox tt mx-4 ${color === "bw" ? "active" : ""}`}
            data-tooltip="Black and White"
            onClick={() => setColor("bw")}
          ></div>
          <div
            className={`colorBox tt mx-4 ${color === "color" ? "active" : ""}`}
            data-tooltip="Coloured"
            onClick={() => setColor("color")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SetupPrint;
