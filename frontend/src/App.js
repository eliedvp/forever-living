import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin pages
import { Dashboard, Users, Analytics, Products as AdminProducts, Orders, Categories } from "./pages";
import { MainLayout } from "./components/common/admin/layout";

// Client pages
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Import client pages existantes
import { 
  Home, 
  Cart, 
  Apropos, 
  Catalogue, 
   
  Shop,
  Checkout,
  Contact,

  ClientLayout 
} from "./pages";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<ClientLayout><Home /></ClientLayout>} />
            <Route path="/cart" element={<ClientLayout><Cart /></ClientLayout>} />
            <Route path="/apropos" element={<ClientLayout><Apropos /></ClientLayout>} />
            <Route path="/catalogue" element={<ClientLayout><Catalogue /></ClientLayout>} />
            <Route path="/contact" element={<ClientLayout><Contact /></ClientLayout>} />
            <Route path="/shop" element={<ClientLayout><Shop /></ClientLayout>} />
            <Route path="/checkout" element={<ClientLayout><Checkout /></ClientLayout>} />

            {/* Routes admin */}
            <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
            <Route path="/analytics" element={<MainLayout><Analytics /></MainLayout>} />
            <Route path="/users" element={<MainLayout><Users /></MainLayout>} />
            <Route path="/products" element={<MainLayout><AdminProducts /></MainLayout>} />
            <Route path="/orders" element={<MainLayout><Orders /></MainLayout>} />
            <Route path="/categories" element={<MainLayout><Categories /></MainLayout>} />

            {/* Redirection par défaut */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
