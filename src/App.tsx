import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import { useEffect, useState } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/" onClick={() => setCurrentPath("/")}>
          <h1 className="nav__img">#VANLIFE</h1>
        </Link>
        <div className="nav__links">
          <Link
            className={currentPath === "/about" ? "current-path" : ""}
            to="/about"
            onClick={() => setCurrentPath("/about")}
          >
            About
          </Link>
          <Link
            className={currentPath === "/vans" ? "current-path" : ""}
            to="/vans"
            onClick={() => setCurrentPath("/vans")}
          >
            Vans
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </Router>
  );
}

export default App;
