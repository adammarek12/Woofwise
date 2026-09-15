import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="border-b border-border bg-surface">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 p-4">
        <Link to="/" className="text-xl font-bold text-primary">WoofWise</Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base">
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
