import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./orderDetailsBar.css";

const OrderDetailsBar = ({ title = <h1>Order details</h1> }) => {
  const navigate = useNavigate();

  return (
    <div className="order-details-bar">
      <span
        className="back-button-box"
        onClick={() => {
          navigate("/");
        }}
      >
        <IoIosArrowRoundBack className="back-button" />
      </span>
      {title}
    </div>
  );
};

export default OrderDetailsBar;
