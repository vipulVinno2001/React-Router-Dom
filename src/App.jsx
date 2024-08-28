import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Page404 from "./Component/Page404";
import User from "./Component/User";
import Filter from "./Component/Filter";
import Contact from "./Component/Contact";
import Company from "./Component/Company";
import Channel from "./Component/Channel";
import Other from "./Component/Other";
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
          <Route  path="/user/:name"  element={<User />}/>
          <Route  path="/filter"  element={<Filter />}/>
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />}/>
            <Route path="channel" element={<Channel />}/>
            <Route path="other" element={<Other />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
