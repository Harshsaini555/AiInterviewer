import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Toaster} from './Components/ui/sonner';
import { LandingPage } from './pages/LandingPage';
import { ResumeUploadPage } from './pages/ResumeUpload';
import JobPosting from './Components/JobPosting/JobPost';
import JobMatches from './Components/JobMatches/JobMatches';

export default function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resume-upload" element={<JobMatches />} />
        </Routes>
      </Router>
    </>
  );
}