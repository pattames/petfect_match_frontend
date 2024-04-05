import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <h1>Petfect Match</h1>
      <Login />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
