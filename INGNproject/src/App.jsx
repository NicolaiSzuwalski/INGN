import "./App.css";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
