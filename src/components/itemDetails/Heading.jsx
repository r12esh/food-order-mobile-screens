import React from "react";

const Heading = ({ index, id }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Order {index + 1}</h1>
      <p
        style={{
          fontWeight: "500",
          fontSize: "14.8px",
          letterSpacing: "-0.3px",
          color: "var(--color-blue-text)",
        }}
      >
        Order ID: {id}
      </p>
    </div>
  );
};

export default Heading;
