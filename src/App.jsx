import React from "react";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
// import NotFound from "./pages/not-found/NotFound";
// import Service from "./pages/service/Service";

const App = () => {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haqida" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact/news" element={<div>Madina so'ragan page</div>} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      {/* <Footer /> */}
    </>
  );
};

export default App;
