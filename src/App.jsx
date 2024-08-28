import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
function App() {
  return (
    <>
      <h1>React Router DOM</h1>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    </Routes>
   
    </BrowserRouter>
    
    </>
  );
}

export default App;
