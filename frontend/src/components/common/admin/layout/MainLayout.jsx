import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <main className="p-4 bg-light flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
