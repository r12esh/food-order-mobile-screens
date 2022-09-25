import { Navigate, useLocation, useNavigate } from "react-router-dom";
import OrderDetailsBar from "../components/home/orderDetailsBar/OrderDetailsBar";
import Heading from "../components/itemDetails/Heading";
import ItemCard from "../components/itemDetails/itemCard/ItemCard";
import TotalAmount from "../components/itemDetails/totalAmount/TotalAmount";

const ItemDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  if (!state) {
    return <Navigate to="/" />;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="item-details">
      <OrderDetailsBar
        title={<Heading index={state.index} id={state.order.id} />}
      />
      <TotalAmount order={state.order} />
      <hr className="divider" />
      <div className="items-container">
        {state.order.items.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
      <div onClick={handleGoHome} className="go-home-btn">
        Go home
      </div>
    </div>
  );
};

export default ItemDetails;
