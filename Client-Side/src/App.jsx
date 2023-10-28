import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../components/LandingPage";
import { CentralizedCard } from "../components/CentralizedCard";
import { Appbar } from "../components/Appbar";

function App() {
  return (
    <Router>
      <Appbar />
      <Routes>
        {/* <Route path='/meetiing/:roomId' element={<MeetingPage />} /> */}
        <Route path='*' element={<LandingPage />} />
        <Route path='/Card' element={<CentralizedCard />} />

      </Routes>
    </Router>
  )
}

export default App;