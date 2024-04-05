import "./App.css";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      <h1>Petfect Match</h1>
      <Routes>
        <Route
          path="/"
          element={user ? <Homepage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
