import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Restaurant-App">
        <Routes>
          <Route path="/Restaurant-App" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
