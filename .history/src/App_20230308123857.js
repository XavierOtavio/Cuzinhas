import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-stone-50 h-screen">
              <Header />
              REACT
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
