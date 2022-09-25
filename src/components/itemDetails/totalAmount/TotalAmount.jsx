import "./totalAmount.css";

const TotalAmount = ({ order }) => {
  let totalPrice = 0;
  const discount = order.discount;
  for (let item of order.items) {
    if (item.itemStatus !== "Item unavailable") {
      totalPrice += item.price;
    }
  }

  return (
    <div className="total-amount">
      <div className="text-box">
        <span className="first grey-text">Total items</span>
        <span className="second">{order.items.length}</span>
      </div>
      <div className="text-box">
        <span className="first grey-text">Total amount</span>
        <span className="second">₹{totalPrice}</span>
      </div>
      <div className="text-box">
        <span className="first grey-text">Discount</span>
        <span className="second green-text">-₹{order.discount}</span>
      </div>
      <hr className="dashed-line" />
      <div className="text-box">
        <span style={{ fontWeight: "700" }} className="first red-text">
          GRAND TOTAL
        </span>
        <span style={{ fontWeight: "700" }} className="second blue-text">
          ₹{totalPrice - discount}
        </span>
      </div>
    </div>
  );
};

export default TotalAmount;
