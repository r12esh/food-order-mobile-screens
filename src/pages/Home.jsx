import React from "react";
import DashedBorderBox from "../components/home/dashedBorderBox/DashedBorderBox";
import OrderBox from "../components/home/orderBox/OrderBox";
import OrderDetailsBar from "../components/home/orderDetailsBar/OrderDetailsBar";

const orders = [
  {
    discount: 50,
    id: 12345677,
    orderStatus: "Being prepared",
    items: [
      {
        id: 1,
        name: "Chicken Biryani",
        price: 170,
        quantity: 2,
        itemStatus: "Being prepared",
      },
      {
        id: 2,
        name: "Mutton Biryani",
        price: 210,
        quantity: 0,
        itemStatus: "Item unavailable",
      },
      {
        id: 3,
        name: "Chicken Biryani",
        price: 170,
        quantity: 2,
        itemStatus: "Being prepared",
      },
      {
        id: 4,
        name: "Mutton Biryani",
        price: 210,
        quantity: 1,
        itemStatus: "Being prepared",
      },
    ],
  },
  {
    discount: 100,
    id: 12345678,
    orderStatus: "Served",
    items: [
      {
        is: 1,
        name: "Chicken Biryani",
        price: 170,
        quantity: 2,
        itemStatus: "Served",
      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 170,
        quantity: 2,
        itemStatus: "Served",
      },
      {
        id: 3,
        name: "Mutton Biryani",
        price: 210,
        quantity: 1,
        itemStatus: "Served",
      },
    ],
  },
  {
    discount: 50,
    id: 12345679,
    orderStatus: "Confirmation pending",
    items: [
      {
        is: 1,
        name: "Chicken Biryani",
        price: 170,
        quantity: 2,
        itemStatus: "Confirmation pending",
      },
      {
        id: 2,
        name: "Mutton Biryani",
        price: 210,
        quantity: 1,
        itemStatus: "Confirmation pending",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <OrderDetailsBar />
      <DashedBorderBox />
      {orders.map((order, index) => (
        <OrderBox key={order.id.toString()} order={order} index={index} />
      ))}
    </div>
  );
};

export default Home;
