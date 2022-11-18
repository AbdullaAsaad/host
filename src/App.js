import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Games from "./pages/Games";
import Cart from "./pages/Cart";
import Conect from "./pages/Conect";
import Phone from "./pages/Phone";
import ComputerPart from "./pages/ComputerPart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/conect" element={<Conect />} />
        <Route path="/computer_parts" element={<Phone />} />
        <Route path="/phone" element={<ComputerPart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
