import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-4xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">WoofWise</Link>
        <div className="flex space-x-4">
          <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">
            About Us
          </Link>
          <Link to="/dashboard" className="text-foreground/70 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/program" className="text-foreground/70 hover:text-foreground transition-colors">
            Program
          </Link>
          <Link to="/library" className="text-foreground/70 hover:text-foreground transition-colors">
            Library
          </Link>
          <Link to="/login" className="text-foreground/70 hover:text-foreground transition-colors">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
