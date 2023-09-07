import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  );
}
