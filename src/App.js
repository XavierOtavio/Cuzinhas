import { Route, Routes } from "react-router-dom";
import LayoutBackend from "./components/LayoutBackend";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import OrderDetail from "./components/OrderDetail";
import Employees from "./components/Employees";
import Stock from "./components/Stock";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LayoutFront from "./components/LayoutFront";
import Products from "./components/Products";
import ProductsList from "./components/ProductsList";
import Machines from "./components/Machines";
import ManProducts from "./components/ManProducts";
import ProductionManagement from "./components/ProductionManagement";
import DetailProducts from "./components/DetailProducts";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<LayoutBackend />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetail />} />
          <Route path="employees" element={<Employees />} />
          <Route path="stock" element={<Stock />} />
          <Route path="machineslist" element={<Machines />} />
          <Route path="manproducts" element={<ManProducts />} />
          <Route path="detailproducts" element={<DetailProducts />} />
          <Route
            path="productionmanagement"
            element={<ProductionManagement />}
          />
        </Route>
        <Route path="/" element={<LayoutFront />}>
          <Route index element={<Home />} />
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
