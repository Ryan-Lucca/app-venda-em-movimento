import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Carteira, Meta, Hub} from "./pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/meta" element={<Meta />} />
          <Route path="/hub" element={<Hub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
