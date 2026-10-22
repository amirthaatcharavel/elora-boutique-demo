import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BoutiqueProvider } from "./context/BoutiqueContext";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import NewArrivals from "./pages/NewArrivals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <BoutiqueProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="new-arrivals" element={<NewArrivals />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BoutiqueProvider>
  );
}
