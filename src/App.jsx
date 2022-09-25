import React from "react";
import StatusBar from "./components/statusBar/StatusBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";

const App = () => {
  return (
    <div className="App">
      <StatusBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/item-details-of-order-:orderNumber"
            element={<ItemDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
