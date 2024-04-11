import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import PetsContextProvider from "./context/PetsContext.jsx";
import FilterContextProvider from "./context/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FilterContextProvider>
      <UserContextProvider>
        <PetsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PetsContextProvider>
      </UserContextProvider>
    </FilterContextProvider>
  </React.StrictMode>
);
