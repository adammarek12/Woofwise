import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import TrainingPlans from './pages/TrainingPlans';
import TrainingPlanDetail from './pages/TrainingPlanDetail';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/about"
              element={
                <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
                  <AboutUs />
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
