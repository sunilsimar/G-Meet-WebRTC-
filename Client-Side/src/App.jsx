import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";
import { CentralizedCard } from "../components/CentralizedCard";
import { Appbar } from "../components/Appbar";
import { MeetingPage } from "../components/MeetingPage";

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path='/meeting/:roomId' element={<MeetingPage />} />
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App;