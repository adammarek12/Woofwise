import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, CalendarClock, CheckCircle2, Lightbulb, Package } from 'lucide-react';
import { getTrainingPlan } from '../data/trainingPlans';

function Card({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Icon size={18} />
        </span>
        {title}
      </h2>
      <div className="mt-4 text-muted-foreground">{children}</div>
    </section>
  );
}

export default function TrainingPlanDetail() {
  const { slug } = useParams();
  const plan = getTrainingPlan(slug);

  if (!plan) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
        <h1 className="text-3xl font-extrabold">Training plan not found</h1>
        <Link to="/training" className="mt-4 inline-block font-semibold text-primary">
          Back to all training plans
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
        <Link
          to="/training"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={16} /> All training plans
        </Link>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">{plan.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{plan.subtitle}</p>

        {plan.safetyNote && (
          <div className="mt-8 rounded-2xl border-2 border-primary bg-primary-soft p-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-primary">
              <AlertTriangle size={20} /> Important safety note
            </h2>
            <p className="mt-2 font-medium text-foreground">{plan.safetyNote}</p>
          </div>
        )}

        <div className="mt-8 flex flex-col gap-6">
          <Card title="Overview" Icon={CheckCircle2}>
            <p>{plan.overview}</p>
            <p className="mt-4">
              <span className="font-semibold text-foreground">Why it works: </span>
              {plan.whyItWorks}
            </p>
          </Card>

          <Card title="Materials needed" Icon={Package}>
            <ul className="flex flex-col gap-2">
              {plan.materials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-extrabold">The plan, phase by phase</h2>
            {plan.phases.map((phase, i) => (
              <section key={phase.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <span className="rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">
                    {phase.timeframe}
                  </span>
                </div>
                <ol className="mt-4 flex flex-col gap-3 text-muted-foreground">
                  {phase.steps.map((step) => (
                    <li key={step} className="flex gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>

          <Card title="Daily practice" Icon={CalendarClock}>
            <p>{plan.dailyPractice}</p>
          </Card>

          <Card title="Troubleshooting" Icon={Lightbulb}>
            <ul className="flex flex-col gap-3">
              {plan.troubleshooting.map((tip) => (
                <li key={tip} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {tip}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
