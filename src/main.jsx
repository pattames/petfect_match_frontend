import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import PetsContextProvider from "./context/PetsContext.jsx";
import FilterContextProvider from "./context/FilterContext.jsx";
import PreferencesContextProvider from "./context/PreferencesContext.jsx";
import ChoiceContextProvider from "./context/ChoiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChoiceContextProvider>
      <FilterContextProvider>
        <PreferencesContextProvider>
          <UserContextProvider>
            <PetsContextProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PetsContextProvider>
          </UserContextProvider>
        </PreferencesContextProvider>
      </FilterContextProvider>
    </ChoiceContextProvider>
  </React.StrictMode>
);
