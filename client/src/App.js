import Cart from "./components/Cart/Cart";
import Create from "./components/Create/Create";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SinglePizza from "./components/SinglePizza/SinglePizza";
import About from "./pages/AboutPage/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Homepage/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./pages/ServicePage/Service";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<SinglePizza />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/service" element={<Service />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
