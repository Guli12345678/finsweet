import React from "react";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
// import Hero from "./components/hero/Hero.jsx";
import Home from "./components/pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/pages/About.jsx";
import Pricing from "./components/pages/Pricing.jsx";
import Work from "./components/pages/Work.jsx";
import Blog from "./components/pages/Blog.jsx";
import Contact from "./components/pages/Contact.jsx";
// import NotFound from "./pages/not-found/NotFound";
// import Service from "./pages/service/Service";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
