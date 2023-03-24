import React from "react";

const Reset = () => {
  return (
    <div
      className="container
    "
    >
      <label htmlFor="newPassword">Enter your new password:</label>
      <input type="text" id="newPassword" />
      <label htmlFor="confirm"> Confirm Password</label>
      <input type="text" id="confirm" />
      <button>Reset</button>
    </div>
  );
};

export default Reset;
