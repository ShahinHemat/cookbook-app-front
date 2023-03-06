import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Profile } from './components/Profile';


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
