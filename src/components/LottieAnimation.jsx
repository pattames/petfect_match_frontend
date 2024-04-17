import React from "react";

const LottieAnimation = ({ src }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "transparent",
      }}
    >
      <iframe
        src={src}
        style={{ width: "100%", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default LottieAnimation;
