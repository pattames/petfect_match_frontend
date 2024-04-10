import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Petfect Match</h1>
      <Route
        path="/preferences"
        element={user ? <UpdateUser /> : <Homepage />}
      />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
