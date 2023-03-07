import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components 
import { LandingPage } from './components/LandingPage';
import { Profile } from './components/Profile';
import { CreateCookbook } from './components/CreateCookbook';


function App() {
  return (
    <div>

      <Routes>

        <Route path="/" exact element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createcookbook" element={<CreateCookbook />} />

      </Routes>

    </div>
  );
}

export default App;
