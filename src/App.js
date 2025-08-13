import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash4 from "./pages/Splash4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
