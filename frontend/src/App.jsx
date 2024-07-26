import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import CropDoctor from './CropDoctor/CropDoctor';
import Home from './Home/Home';
import Fieldbot from './Fieldbot/Fieldbot';
import CropAi from './CropAi/CropAi';
import AnimalDeduction from './AnimalDeduction/AnimalDeduction';
import PestManagement from './PestManagement/PestManagement';
import Pricing from './Pricing/Pricing';
import Profile from './Profile/Profile';
import Alert from './Alert/Alert';
import Community from './Community/Community';
import Chatbot from './Chatbot/Chatbot';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cropdoctor" element={<CropDoctor />} />
          <Route path="/fieldbot" element={<Fieldbot/>} />
          <Route path="/cropai" element={<CropAi/>} />
          <Route path="/animaldeduction" element={<AnimalDeduction/>}/>
          <Route path="/pestmanagement" element={<PestManagement/>}/>
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/cropdoctor" element={<CropDoctor/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/alert' element={<Alert/>}/>
          <Route path='/community' element={<Community/>}/>
          <Route path='/chatbot' element={<Chatbot/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App