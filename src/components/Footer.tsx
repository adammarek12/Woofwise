import React from 'react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Training Programs', to: '/training' },
      { label: 'About Us', to: '/about' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', to: '/help' },
      { label: 'Contact Us', to: '/help' },
      { label: 'FAQs', to: '/help' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="text-xl font-extrabold">WoofWise</span>
          <p className="text-sm text-footer-foreground/70">
            Effective, enjoyable dog training made simple.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <h3 className="font-bold">{col.title}</h3>
            {col.links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm text-footer-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Connect</h3>
          {['Facebook', 'Instagram', 'Twitter'].map((s) => (
            <span key={s} className="text-sm text-footer-foreground/70">
              {s}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
