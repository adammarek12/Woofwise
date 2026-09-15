import React from 'react';
import { Link } from 'react-router-dom';
import heroDog from '../assets/hero-dog.jpg';

const features = [
  {
    emoji: '🐾',
    title: 'Foundations First',
    text: 'Build focus, name response and calm manners from day one.',
  },
  {
    emoji: '📣',
    title: 'Total Recall',
    text: 'A reliable come-back cue, even with real-world distractions.',
  },
  {
    emoji: '🌳',
    title: 'Off-Leash Ready',
    text: 'Step-by-step freedom your dog earns and you can trust.',
  },
  {
    emoji: '😌',
    title: 'The Calm Dog Blueprint',
    text: 'Settle, crate comfort and a dog that can switch off.',
  },
];

const testimonials = [
  {
    quote: 'Three weeks in and Maple comes back every single time. I finally relax on walks.',
    name: 'Sarah & Maple',
  },
  {
    quote: 'The rescue path helped us understand Bruno instead of just correcting him.',
    name: 'Dan & Bruno',
  },
];

export default function Index() {
  return (
    <div className="flex flex-col gap-16 py-10">
      {/* Hero */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Leash-free training, step by step
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Train Smarter. Go Leashless.{' '}
            <span className="text-primary">Build Real Trust.</span>
          </h1>
          <p className="text-lg text-foreground/70">
            WoofWise is a structured, week-by-week program that turns everyday
            moments into training wins — for a dog that listens because they
            want to, not because of the leash.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/training"
              className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Start Training Today
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-border bg-surface px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
          <img
            src={heroDog}
            alt="Happy golden retriever running off-leash through a sunlit meadow"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Programs */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold sm:text-3xl">Your training paths</h2>
          <p className="text-foreground/70">
            Pick where you are today. Every path unlocks lessons one at a time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-5"
            >
              <span className="text-2xl" aria-hidden="true">
                {f.emoji}
              </span>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm text-foreground/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Owners who made the leap</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <p className="text-foreground/80">“{t.quote}”</p>
              <footer className="mt-3 text-sm font-semibold text-primary">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready for the first lesson?</h2>
        <p className="mx-auto mt-2 max-w-xl opacity-90">
          Answer a few quick questions about your dog and we’ll point you to the
          right starting point.
        </p>
        <Link
          to="/training"
          className="mt-6 inline-block rounded-md bg-surface px-6 py-3 font-semibold text-primary transition-opacity hover:opacity-90"
        >
          Start Training Today
        </Link>
      </section>
    </div>
  );
}
