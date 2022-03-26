import Products from "./components/Products";
import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductAdd from "./components/ProductAdd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="ProductAdd" element={<ProductAdd />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
