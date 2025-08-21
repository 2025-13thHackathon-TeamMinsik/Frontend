import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash4 from "./pages/Splash4";
import Splash1 from "./pages/Splash1";
import Splash2 from "./pages/Splash2";
import Splash3 from "./pages/Splash3";
import StudentSignup1 from "./pages/StudentSignup1";
import StudentSignup2 from "./pages/StudentSignup2";
import StudentSignup3 from "./pages/StudentSignup3";
import StudentSignup4 from "./pages/StudentSignup4";
import StudentSignup5 from "./pages/StudentSignup5";
import StudentSignup6 from "./pages/StudentSignup6";
import BusinessSignup1 from "./pages/BusinessSignup1";
import BusinessSignup2 from "./pages/BusinessSignup2";
import BusinessSignup3 from "./pages/BusinessSignup3";
import BusinessSignup4 from "./pages/BusinessSignup4";
import BusinessSignup5 from "./pages/BusinessSignup5";
import StudentPost from "./pages/StudentPost";
import BusinessPost from "./pages/BusinessPost";
import StudentAiPosts from "./pages/StudentAiPosts";
import MyAlert from "./pages/MyAlert";
import StudentReview from "./pages/StudentReview";
import BusinessAiPosts from "./pages/BusinessAiPosts";
import BusinessReview from "./pages/BusinessReview";
import BusinessViewReview from "./pages/BusinessViewReview";
import BusinessApplications from "./pages/BusinessApplications";
import StudentAiPortfolio from "./pages/StudentAiPortfolio"
import StuInfoModi from "./pages/StuInfoModi";
import StuIntroModi from "./pages/StuIntroModi";
import StuActModi from "./pages/StuActModi";
import StuTalModi from "./pages/StuTalModi";
import Login from "./pages/Login";
import Stamp from "./pages/Stamp";
import ReciptPhoto from "./pages/ReciptPhoto";
import ReciptDone from "./pages/ReciptDone"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash4 />} />
        <Route path="/StudentSignup1" element={<StudentSignup1 />} />
        <Route path="/StudentSignup2" element={<StudentSignup2 />} />
        <Route path="/StudentSignup3" element={<StudentSignup3 />} />
        <Route path="/StudentSignup4" element={<StudentSignup4 />} />
        <Route path="/StudentSignup5" element={<StudentSignup5 />} />
        <Route path="/StudentSignup6" element={<StudentSignup6 />} />

        <Route path="/BusinessSignup1" element={<BusinessSignup1 />} />
        <Route path="/BusinessSignup2" element={<BusinessSignup2 />} />
        <Route path="/BusinessSignup3" element={<BusinessSignup3 />} />
        <Route path="/BusinessSignup4" element={<BusinessSignup4 />} />
        <Route path="/BusinessSignup5" element={<BusinessSignup5 />} />
        <Route path="/StudentPost" element={<StudentPost />} />
        <Route path="/BusinessPost" element={<BusinessPost />} />
        <Route path="/StudentAiPosts" element={<StudentAiPosts />} />
        <Route path="/Splash1" element={<Splash1 />} />
        <Route path="/Splash2" element={<Splash2 />} />
        <Route path="/Splash3" element={<Splash3 />} />
        <Route path="/MyAlert" element={<MyAlert />} />
        <Route path="/StudentReview" element={<StudentReview />} />
        <Route path="/BusinessAiPosts" element={<BusinessAiPosts />} />
        <Route path="/BusinessReview" element={<BusinessReview />} />
        <Route path="/BusinessViewReview" element={<BusinessViewReview />} />
        <Route
          path="/BusinessApplications"
          element={<BusinessApplications />}
        />
        <Route path="/StudentAiPortfolio" element={<StudentAiPortfolio />} />
        <Route path="/StuInfoModi" element={<StuInfoModi />}/>
        <Route path="/StuIntroModi" element={<StuIntroModi />}/>
        <Route path="/StuActModi" element={<StuActModi />}/>
        <Route path="/StuTalModi" element={<StuTalModi />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Stamp" element={<Stamp />}/>
        <Route path="/ReciptPhoto" element={<ReciptPhoto />}/>
         <Route path="/ReciptDone" element={<ReciptDone />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
