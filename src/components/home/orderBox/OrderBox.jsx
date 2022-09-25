import { useNavigate } from "react-router-dom";
import {
  AlarmIcon,
  CookingPotIcon,
  TickIcon,
  PendingIcon,
} from "../../../assets/icons";
import "./orderBox.css";

const OrderBox = ({ order, index }) => {
  const navigate = useNavigate();
  const id = order.id;
  const orderStatus = order.orderStatus;
  let totalCost = 0;
  for (let item of order.items) {
    if (item.itemStatus !== "Item unavailable") {
      totalCost += item.price;
    }
  }

  const handleClick = () => {
    navigate(`/item-details-of-order-${id.toString()}`, {
      state: { order, index },
    });
  };

  return (
    <div onClick={handleClick} className="order-box">
      <div className="order-card-first-half">
        <div className="cooking-pot-icon-box">
          <CookingPotIcon />
        </div>
        <div className="order-card-price-box">
          <h4>Order {index + 1}</h4>
          <p>
            Total: <span>₹{totalCost - order.discount}</span>
          </p>
        </div>
      </div>
      <div className="order-card-second-half">
        <div className="order-id">
          <span>ID: </span>
          <span>{id}</span>
        </div>
        <div
          className="order-status"
          style={
            orderStatus === "Served"
              ? {
                  color: "var(--color-green-text)",
                  background: "var(--color-green-bg)",
                }
              : orderStatus === "Confirmation pending"
              ? {
                  color: "var(--color-yellow-text)",
                  background: "var(--color-yellow-bg)",
                }
              : null
          }
        >
          {orderStatus} &nbsp;
          {orderStatus === "Being prepared" ? (
            <AlarmIcon />
          ) : orderStatus === "Served" ? (
            <TickIcon />
          ) : (
            <PendingIcon />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBox;
