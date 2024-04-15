import "./App.css";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";

import "@fortawesome/fontawesome-svg-core/styles.css";

import Prefrences from "./components/Prefrences";

import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Match from "./components/Match";
import UserProfile from "./components/UserProfile";
import PetId from "./components/PetId";
import Dashboard from "./components/Dashboard";
import PetProfile from "./components/PetProfile";

function App() {
  const { user } = useContext(UserContext);
  console.log(user && user);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/preferences"
          element={user ? <Prefrences /> : <Homepage />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route path="/match" element={user ? <Match /> : <Homepage />} />
        <Route path="/match/:id" element={user ? <PetId /> : <Homepage />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Homepage />}
        />
        <Route
          path="/petprofile"
          element={user ? <PetProfile /> : <Homepage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
