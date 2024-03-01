import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import PrivateEvent from "./pages/PrivateEvent";
import About from "./pages/About";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path="privateEvent" element={<PrivateEvent />} />
          <Route path="about" element={<About />} />
        </Route>
    </Routes>

  </BrowserRouter>
     </>
  
  );

}

export default App;
