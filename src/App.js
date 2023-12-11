import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import PrivateEvent from "./pages/PrivateEvent";
// import Contact from "./pages/Contact";
// import People2 from "./pages/People2";
// import People1 from "./pages/People1";
// import Leave from "./pages/Leave";
// import Finish from "./pages/Finish";


function App() {
  // Set the animation to play based on scroll position

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />} >
              
      
              <Route index element={<Home />} />
              <Route path="privateEvent" element={<PrivateEvent />} />
              {/* <Route path="contact" element={<Contact />} />
              <Route path="leave" element={<Leave />} />
              <Route path="people1" element={<People1 />} />
              <Route path="people2" element={<People2 />} />
              <Route path="finish" element={<Finish />} />
              <Route path="finish" element={<Finish />} />
              <Route path="*" element={<NoPage />} /> */}

      </Route>

    </Routes>

  </BrowserRouter>
     </>
  
  );

}

export default App;
