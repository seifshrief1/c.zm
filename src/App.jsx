import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transformations from "./pages/Transformations";
import Services from "./pages/Services";
import Navbar from "./components/Navbar";
import Inquiries from "./pages/Inquiries";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/inquiries" element={<Inquiries />} />
      </Routes>
    </>
  );
}

export default App;
