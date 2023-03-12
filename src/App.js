import { Route, Routes } from "react-router-dom";
import LayoutBackend from "./components/LayoutBackend";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Employees from "./components/Employees";
import Stock from "./components/Stock";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LayoutFront from "./components/LayoutFront";
import Products from "./components/Products";
import ProductsList from "./components/ProductsList";
import Machines from "./components/Machines";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<LayoutBackend />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employees" element={<Employees />} />
          <Route path="stock" element={<Stock />} />
          <Route path="machines" element={<Machines />} />
        </Route>
        <Route path="/" element={<LayoutFront />}>
          <Route path="" element={<Home />} />
          <Route path="productsList" element={<ProductsList />} />
          <Route path="productsList/product1" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
