import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import Daily from "./screens/Daily";
import Earn from "./screens/Earn";
import Referals from "./screens/Referals";
import AirDrop from "./screens/AirDrop";
import Navigation from "./layout/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/shares" element={<Referals />} />
        <Route path="/airdrop" element={<AirDrop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
