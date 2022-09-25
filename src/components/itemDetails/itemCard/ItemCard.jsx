import {
  AlarmIcon,
  PendingIcon,
  TickIcon,
  ExclamationIcon,
} from "../../../assets/icons";
import "./itemCard.css";

const ItemCard = ({ item }) => {
  const name = item.name;
  const price = item.price;
  const quantity = item.quantity;
  const itemStatus = item.itemStatus;

  return (
    <div className="item-card">
      <div className="first-half">
        <div
          style={itemStatus === "Item unavailable" ? { opacity: "0.4" } : null}
          className="food-image-container"
        >
          {itemStatus === "Item unavailable" ? <ExclamationIcon /> : null}
        </div>
        <div className="name-and-price">
          <p>{name}</p>
          <p>₹{price}</p>
        </div>
      </div>
      <div className="second-half">
        <div
          style={
            itemStatus === "Item unavailable"
              ? {
                  background: "var(--color-red-bg)",
                  color: "var(--color-red-primary)",
                }
              : itemStatus === "Served"
              ? {
                  background: "var(--color-green-bg)",
                  color: "var(--color-green-text)",
                }
              : itemStatus === "Confirmation pending"
              ? {
                  background: "var(--color-yellow-bg)",
                  color: "var(--color-yellow-text)",
                }
              : null
          }
          className="item-status"
        >
          {itemStatus} &nbsp;{" "}
          {itemStatus === "Item unavailable" ? (
            ""
          ) : itemStatus === "Served" ? (
            <TickIcon />
          ) : itemStatus === "Confirmation pending" ? (
            <PendingIcon />
          ) : (
            <AlarmIcon />
          )}
        </div>
        <div className="item-qty">
          <span>Qty: </span>
          <span>{quantity} Nos</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
