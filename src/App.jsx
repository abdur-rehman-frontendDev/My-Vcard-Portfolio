import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Resume from './pages/Resume';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

const App = () => {
  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/My-Portfolio" element={<Navigate to="/My-Portfolio/about" />} />
          <Route path="/My-Portfolio/" element={<Navigate to="/My-Portfolio/about" />} />
          <Route path="/My-Portfolio/about" element={<About />} />
          <Route path="/My-Portfolio/resume" element={<Resume />} />
          <Route path="/My-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="/My-Portfolio/blog" element={<Blog />} />
          <Route path="/My-Portfolio/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/My-Portfolio/about" />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;