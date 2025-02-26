import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Disease from "./components/Disease.jsx";
import DrugsAndSupplements from "./components/DrugsAndSupplements.jsx";
import Doctor from "./components/Doctor.jsx";
import NewsAndBlogs from "./components/NewAndBlogs.jsx"

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Disease' element={<Disease/>}></Route>
          <Route path='/Drugs' element={<DrugsAndSupplements/>}></Route>
          <Route path='/Doctor' element={<Doctor/>}></Route>
          <Route path='/News' element={<NewsAndBlogs/>}></Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
