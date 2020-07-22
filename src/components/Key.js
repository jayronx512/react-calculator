import React from "react";

const Key = ({ data, performCalculation }) => {
  return (
    <>
      <div
        style={{
          width: `calc((100% / 12) * ${data.width})`,
          backgroundColor: data.color,
          border: "1px solid black",
          boxSizing: "border-box",
          cursor: "pointer",
          padding: "0"
        }}
      >
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            width: "100%"
          }}
          onClick={() => performCalculation(data.value)}
        >
          <h2 style={{ textAlign: "center", color: "white" }}>{data.value}</h2>
        </button>
      </div>
    </>
  );
};

export default Key;