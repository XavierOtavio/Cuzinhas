import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import LayoutBackend from "./components/Layout_Backend";
import Dashboard from "./components/Layout";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LayoutFront from "./components/Layout_Front";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<LayoutBackend />}>
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
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
