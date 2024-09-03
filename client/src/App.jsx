import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import TechnicalFollowUp from './components/TechnicalFollowUp';
import CulturalFollowUp from './components/CulturalFollowUp';
import SportsFollowUp from './components/SportsFollowUp';
import Preferences from './components/Preferences';
import Music from './components/Music';
import Dance from './components/Dance';
import Home from './components/Home';
import Art from './components/Art';
import ClubInformation from './components/ClubInformation';
import EventCalendar from './components/Event';
import About from './components/About';
import ClubRecommendation from './components/ClubRecommendation';


import Regisistrations from './components/Regisistrations';

import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import ReadUser from './components/ReadUser';
import PaintComp from './components/PaintComp';
import PaintRead from './components/PaintRead';
import EditPaint from './components/EditPaint';
import Pravrutthi from './components/Pravruthhi';
import Ninaad from './components/Ninaad';
import Groovehouse from './components/Groovehouse';
import DA from './components/DA';
import Paramvah from './components/Paramvah';
import Falcons from './components/falcons';
import Finearts from './components/finearts';
import CodingClub from './components/coding';
import BusinessClub from './components/business';
import RoboticsClub from './components/robotics';
import IndoorSportsClub from './components/indoor';
import OutdoorSportsClub from './components/outdoor';
import YogaClub from './components/yoga';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Routes>
          <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/preferences' element={<Preferences />} /> 
            <Route path='/cultural' element={<CulturalFollowUp />} /> 
            <Route path='/technical' element={<TechnicalFollowUp />} />
            <Route path='/sports' element={<SportsFollowUp />} />
            <Route path='/music' element={<Music />} />
            <Route path='/dance' element={<Dance />} />
            <Route path='/art' element={<Art />} />
            <Route path='/ninaad' element={<Ninaad />} />
            <Route path='/groovehouse' element={<Groovehouse/>} />
            <Route path='/da' element={<DA/>} />
            <Route path='/paramvah' element={<Paramvah/>} />
            <Route path='/pravrutthi' element={<Pravrutthi/>} />
            <Route path='/art/falcons' element={<Falcons />} />
            <Route path='/art/finearts' element={<Finearts/>} />
            <Route path='/coding' element={<CodingClub/>} />
            <Route path='/business' element={<BusinessClub />} />
            <Route path='/robotics' element={<RoboticsClub />} />
            <Route path='/indoor' element={<IndoorSportsClub />} />
            <Route path='/outdoor' element={<OutdoorSportsClub />} />
            <Route path='/yoga' element={<YogaClub />} />
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<EventCalendar />} />
            <Route path='/about' element={<About />} />
            <Route path="/add" element={<AddUser/>} />
            <Route path="/all" element={<AllUsers/>} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/read/:id" element={<ReadUser/>} />
            <Route path="/arts" element={<PaintComp/>} />
            <Route path="/editp/:id" element={<EditPaint />} />
            <Route path="/readp/:id" element={<PaintRead/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;


