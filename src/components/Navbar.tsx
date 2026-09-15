import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary">
          WoofWise
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base">
          <Link to="/training" className="text-foreground/75 transition-colors hover:text-primary">
            Training Programs
          </Link>
          <Link to="/about" className="text-foreground/75 transition-colors hover:text-primary">
            About Us
          </Link>
          <Link
            to="/login"
            className="rounded-lg border border-border px-4 py-2 font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
}
