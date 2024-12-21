import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <>
      {/* Header is displayed on all pages */}
      <Header />
      
      <div>
        <h1>React Router with Vite + TypeScript</h1>
        {/* Navigation Links */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/second-page">Second Page</Link>
        </nav>
        
        {/* Routes determine which page content to show */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>

      {/* Footer is displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;
