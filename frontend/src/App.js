import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard,Users } from "./pages"; // Import depuis pages/index.js
import { MainLayout } from "./components/common/admin/layout";
import "./App.css";



function App() {
  return (
    <Router>
      <Routes>
        {/* Page dashboard avec MainLayout */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }/>

          <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />

        

        {/* Page par défaut : redirige vers dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
