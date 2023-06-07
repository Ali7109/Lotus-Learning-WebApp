import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import CourseBox from "./components/Course-Box/CourseBox";
// import Header from "./components/Header-Components/Logged-In/Header-Logged-In";
// import SideNav from "./components/Side-Nav-bar/Side-Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

import LearnersSignUp from './Pages/Learners-Sign-Up/Learners-Sign-Up.js';
// import GameBox from "./components/Game-Box/GameBox";
// import LearnersInfo from "./components/Profile-Learners-Info/LearnersInfo";
import LearnersAccount from './Pages/Learners-Account/LearnersAccount';
import SignUpPage from './Pages/Sign-Up-Page/SignUpPage';
// import PersonalProfile from "./components/Personal-Profile-Components/PersonalProfile";
import CourseProgressPage2 from './Pages/Learners-CourseProgress/CourseProgressPage';
import CourseSpecific from './Pages/Course-Specific/CourseSpecific';
import LearnersProfileNotifications from './Pages/Learners-Profile-Notifications/LearnersProfileNotifications';

import LearnersGamesPage from './Pages/Learners-Games/LearnersGamesPage.js';
import LearnersLibrary from './Pages/Learners-Library/LearnersLibrary.js';

import CourseCompletion from './Pages/Learners-CourseCompletion/CourseCompletion.js';
import Header from './components/Header-Components/Logged-In/Header-Logged-In';
import LearnersAccountPage from './Pages/Learners-Account/LearnersAccount';
import LearnersHelp from './Pages/Learners-Help/LearnersHelp';
import LearnersProfile from './Pages/Learners-Profile/Learners-Profile';
import ProfileMyCourses from './Pages/Learners-Library/LearnersLibrary.js';
import PrivacySecurity from './Pages/Learners-Privacy_Security/PrivacySecurity';
import Games from './Pages/Learners/Games/Games';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LearnersProfile />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/LearnersSignUp' element={<LearnersSignUp />} />
        <Route path='/personalprofile' element={<LearnersAccountPage />} />
        <Route path='/LearnersGamesPage' element={<LearnersGamesPage />} />
        <Route path='/ProfileMyCourses' element={<ProfileMyCourses />} />
        {/* <Route path="/CourseProgress" element={<CourseProgessPage />} /> */}
        <Route path='/LearnersLibrary' element={<LearnersLibrary />} />
        <Route path='/LearnersHelp' element={<LearnersHelp />} />
        <Route path='/coursecatalogue' element={<LearnersProfile />} />
        <Route path='/CourseProgressPage2' element={<CourseProgressPage2 />} />
        <Route path='/games' element={<Games />} />
        <Route
          path='/LearnersNotifications'
          element={<LearnersProfileNotifications />}
        />
        <Route path='/Security' element={<PrivacySecurity />} />
        <Route path='/CourseSpecific' element={<CourseSpecific />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
