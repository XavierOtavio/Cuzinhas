import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              REACT
            </div>
          }
        />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
    </div>
  );
}

export default App;
