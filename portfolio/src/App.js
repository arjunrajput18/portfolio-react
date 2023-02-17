import Home from "./Component/Home";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Projects from "./Component/Projects";
// import Blogs from "./Component/Blogs";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="projects" element={<Projects/>}/>
        <Route path="blogs"  element={<Blogs/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
