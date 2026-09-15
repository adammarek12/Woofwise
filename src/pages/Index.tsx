import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, ChevronDown, MessageCircle, Star } from 'lucide-react';
import heroDog from '../assets/hero-dog.jpg';

const heroPoints = [
  { Icon: ShieldCheck, label: 'Positive Reinforcement' },
  { Icon: Clock, label: 'Quick Results' },
  { Icon: ChevronDown, label: 'Structured Programs' },
  { Icon: MessageCircle, label: 'Expert Guidance' },
];

const steps = [
  {
    n: 1,
    title: 'Structured Programs',
    text: 'Follow our week-by-week training programs designed by professional dog trainers.',
  },
  {
    n: 2,
    title: 'Track Progress',
    text: "Monitor your dog's improvement with visual progress indicators and milestones.",
  },
  {
    n: 3,
    title: 'Continuous Learning',
    text: "Access ongoing lessons that adapt to you and your dog's evolving training needs.",
  },
];

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Sarah T.',
    quote:
      "My corgi Max was always pulling on the leash and wouldn't listen. After 4 weeks with WoofWise, he's like a different dog!",
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'James R.',
    quote:
      'The structured approach made all the difference. My German shepherd is now responding to commands without the need for treats.',
  },
  {
    name: 'Emily K.',
    quote:
      'As a first-time dog owner, I was overwhelmed. WoofWise broke everything down into manageable steps, and now both of us are enjoying training time!',
  },
];

function Pill({ children, tone = 'soft' }: { children: React.ReactNode; tone?: 'soft' | 'white' }) {
  return (
    <span
      className={`w-fit rounded-full px-4 py-1.5 text-sm font-semibold text-primary ${
        tone === 'white' ? 'bg-surface' : 'bg-primary-soft'
      }`}
    >
      {children}
    </span>
  );
}

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col gap-6">
            <Pill>Effective Dog Training</Pill>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Unleash Your Dog's
              <br />
              <span className="text-primary">True Potential</span>
            </h1>

            <p className="max-w-lg text-lg text-muted-foreground">
              WoofWise helps you train your dog effectively with structured,
              leash-free methods that make learning fun for both of you.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/training"
                className="rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Start Training Today
              </Link>
              <Link
                to="/login"
                className="rounded-lg border border-border bg-surface px-7 py-3.5 font-bold text-primary transition-colors hover:border-primary"
              >
                Log In
              </Link>
            </div>

            <ul className="mt-2 grid gap-4 sm:grid-cols-2">
              {heroPoints.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span className="font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl lg:rotate-1">
            <img
              src={heroDog}
              alt="Tan dog sitting and raising a paw during a training session"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Pill>Our Approach</Pill>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How WoofWise Works
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Our proven training methodology makes dog training effective and
              enjoyable
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-8 text-center transition-shadow hover:shadow-lg"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-2xl font-extrabold text-primary">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-accent-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Pill tone="white">Happy Owners</Pill>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Success Stories
            </h2>
            <p className="max-w-2xl text-lg text-foreground/70">
              See how WoofWise has transformed dogs and their owners' lives
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col gap-5 rounded-2xl bg-surface p-7 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-lg font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-bold">{t.name}</span>
                    <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </span>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{t.quote}"</p>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/signup"
              className="rounded-lg bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Join WoofWise Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
