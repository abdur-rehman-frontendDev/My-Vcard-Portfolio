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
          <Route path="/portfolio" element={<Navigate to="/portfolio/about" />} />
          <Route path="/portfolio/" element={<Navigate to="/portfolio/about" />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/resume" element={<Resume />} />
          <Route path="/portfolio/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/blog" element={<Blog />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/portfolio/about" />} />
        </Routes>
      </div>
    </main>
  );
};

export default App;