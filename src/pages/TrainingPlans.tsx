import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trainingPlans } from '../data/trainingPlans';

export default function TrainingPlans() {
  return (
    <div className="bg-gradient-to-b from-surface to-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <span className="w-fit rounded-full bg-primary-soft px-4 py-1.5 text-sm font-semibold text-primary">
          Training Plans
        </span>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Pick a goal, follow the <span className="text-primary">phases</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Every plan is reward-based, broken into short phases, and designed to fit into
          everyday life with your dog.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingPlans.map((plan) => (
            <Link
              key={plan.slug}
              to={`/training/${plan.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary"
            >
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <p className="mt-2 flex-1 text-muted-foreground">{plan.subtitle}</p>
              <span className="mt-5 flex items-center gap-2 font-semibold text-primary">
                {plan.phases.length} phases
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
