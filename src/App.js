import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash4 from "./pages/Splash4";
import StudentSignup from "./pages/StudentSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash4 />} />
        <Route path="/StudentSignup" element={<StudentSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
