import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./app/components/Header";
import DashboardPage from "./app/pages/SecretPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
