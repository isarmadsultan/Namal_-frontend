import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NamalHomepage from './components/NamalHomepage';
import ElectricalDepartment from './components/eedepartment/ElectricalDepartment';
import CSDepartment from './components/csdepartment/CSDepartment';
import MathDepartment from './components/MathDepartment/mathDepartment';
import BBADepartment from './components/BBADepartment/BBADepartment';
import ChairmanMessage from './components/ABOUT/ChairmanMessage';
import RectorMessage from './components/ABOUT/RectorMessage';
import VisionMission from './components/ABOUT/VisionMission';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<NamalHomepage />} />
          <Route path="/departments/electrical-engineering" element={<ElectricalDepartment />} />
          <Route path="/departments/computer-science" element={<CSDepartment />} />
          <Route path="/departments/math" element={<MathDepartment />} />
          <Route path="/departments/bba" element={<BBADepartment />} />
          <Route path="/about/chairman-message" element={<ChairmanMessage />} />
          <Route path="/about/rector-message" element={<RectorMessage />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;