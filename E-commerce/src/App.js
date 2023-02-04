import logo from "./logo.svg";
import "./App.css";
import { Product } from "./page/add.imaage";
// import { Order } from "./page/order/order";
import { Orders } from "./page/order/mainOrder";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from "./comp/header/header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
