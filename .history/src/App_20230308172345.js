import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LayoutBackend from "./components/LayoutBackend";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Employees from "./components/Employees";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LayoutFront from "./components/LayoutFront";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<LayoutBackend />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="employees" element={<Employees />} />
        </Route>
        <Route path="" element={<LayoutFront />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
