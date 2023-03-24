import React, { useState } from "react";

const Bind = () => {
  const [spiralBinding, setSpiralBinding] = useState(false);
  const [plasticCover, setPlasticCover] = useState(false);

  const handleSpiralBindingChange = () => {
    setSpiralBinding(true);
    setPlasticCover(false);
  };

  const handlePlasticCoverChange = () => {
    setPlasticCover(true);
    setSpiralBinding(false);
  };

  return (
    <>
      <div className="d-flex my-3 row bind">
        <div className="col-lg-3">
          <span className="fw-bold mx-4">Bindings:</span>
        </div>
        <div className="col-lg-9 d-flex">
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={spiralBinding}
                onChange={handleSpiralBindingChange}
                id="spiralBinding"
              />
              <label className="form-check-label" htmlFor="spiralBinding">
                Spiral Binding
              </label>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={plasticCover}
                onChange={handlePlasticCoverChange}
                id="plasticCover"
              />
              <label className="form-check-label" htmlFor="plasticCover">
                Plastic Cover
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bind;
