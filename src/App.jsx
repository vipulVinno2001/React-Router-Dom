import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Page404 from "./Component/Page404";
function App() {
  return (
    <>
      <h1>React Router DOM</h1>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
