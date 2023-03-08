import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Layout";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={
            <div className="bg-stone-50 h-screen">
              <Header />
              REACT
            </div>
          }
        /> */}
        <Route path="/dashboard" element="Layout_Backend.js">
          <Route path="" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
