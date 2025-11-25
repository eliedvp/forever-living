import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <div className="client-layout d-flex flex-column min-vh-100 bg-light">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
}

