import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Carteira from "./pages/Carteira/Carteira";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Telas COM BottomNavBar */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carteira" element={<Carteira />} />
          {/* <Route path="/meta" element={<Meta />} />
          <Route path="/hub" element={<Hub />} /> */}
        </Route>

        {/* Telas SEM BottomNavBar
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
