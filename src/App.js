import Debug from "./components/Debug/Debug";
import MainPage from "./components/MainPage/MainPage";
import NavigationHistory from "./components/NavigationHistory/NavigationHistory";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const products = [
  { id: 1, name: "Банан", price: 50.49, selected: false },
  { id: 2, name: "Апельсин", price: 59.95, selected: false },
  { id: 3, name: "Мандарин", price: 68.99, selected: false },
  { id: 4, name: "Ківі", price: 138.89, selected: false },
  { id: 5, name: "Кокос", price: 103.49, selected: false },
  { id: 6, name: "Кавун", price: 46.28, selected: false },
];

export const DataContext = createContext(products);

export default function App() {
  return (
    <Router>
      <NavigationHistory>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={`/productInfo/:idx`} element={<ProductInfo />} />
          <Route path="/debug" element={<Debug />}></Route>
        </Routes>
      </NavigationHistory>
    </Router>
  );
}
