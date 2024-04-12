import "./App.css";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";

import Prefrences from "./components/Prefrences";

import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Match from "./components/Match";
import UserProfile from "./components/UserProfile";
import PetId from "./components/PetId";
import Congrats from "./components/Congrats";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavBar />
      <h1>Petfect Match</h1>
      <UserProfile />

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
          path="/match/congrats"
          element={user ? <Congrats /> : <Homepage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
