
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-6">
                  <h1 className="text-4xl font-bold text-center">
                    Train Smarter. Go Leashless. Build Real Trust.
                  </h1>
                  <p className="text-lg text-center max-w-xl">
                    WoofWise is a structured, multi-week dog training program designed for everyday dog owners. Enjoy smart, phased lessons that build real-world trust and behavior.
                  </p>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                    Start Training
                  </button>
                </div>
              </div>
            } />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
