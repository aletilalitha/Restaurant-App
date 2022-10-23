import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import Orders from "./Orders";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
