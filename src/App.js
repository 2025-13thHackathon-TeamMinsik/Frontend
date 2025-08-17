import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash4 from "./pages/Splash4";
import Splash1 from "./pages/Splash1";
import Splash2 from "./pages/Splash2";
import Splash3 from "./pages/Splash3";
import StudentSignup1 from "./pages/StudentSignup1";
import StudentSignup2 from "./pages/StudentSignup2";
import StudentSignup3 from "./pages/StudentSignup3";
import StudentSignup4 from "./pages/StudentSignup4";
import BusinessSignup3 from "./pages/BusinessSignup3";
import StudentPost from "./pages/StudentPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash4 />} />
        <Route path="/StudentSignup1" element={<StudentSignup1 />} />
        <Route path="/StudentSignup2" element={<StudentSignup2 />} />
        <Route path="/StudentSignup3" element={<StudentSignup3 />} />
        <Route path="/StudentSignup4" element={<StudentSignup4 />} />
        <Route path="/BusinessSignup3" element={<BusinessSignup3 />} />
        <Route path="/StudentPost" element={<StudentPost />} />
        <Route path="/Splash1" element={<Splash1 />} />
        <Route path="/Splash2" element={<Splash2 />} />
        <Route path="/Splash3" element={<Splash3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
