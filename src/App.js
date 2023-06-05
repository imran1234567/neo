import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Order from "./components/Order";
import Store from "./components/Store";
import Terms from "./components/Terms";
import Policy from "./components/Policy";
import Person from "./components/Person";
import Register from "./components/Register";
import Login from "./components/Login";
import Delivery from "./components/Delivery";
import Zip from "./components/Zip";
import Forgot from "./components/Forgot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/store" element={<Store />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/person" element={<Person />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/zip" element={<Zip />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
      {/* |<Home1 /> */}
    </div>
  );
}

export default App;
