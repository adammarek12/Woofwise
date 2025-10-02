import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About WoofWise</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            WoofWise is dedicated to helping everyday dog owners build meaningful, trust-based relationships with their canine companions through structured, science-backed training programs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="text-lg mb-4">
            Our multi-week training programs are designed to take you and your dog from basic obedience to advanced off-leash freedom. We believe in positive reinforcement, clear communication, and building real-world skills that last a lifetime.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Why Choose WoofWise?</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Structured, phased learning approach</li>
            <li>Designed for everyday dog owners, not just professionals</li>
            <li>Focus on building trust and real-world behavior</li>
            <li>Track your progress throughout the journey</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-lg">
            Ready to transform your relationship with your dog? Start your training journey with WoofWise today and experience the joy of a well-trained, happy companion.
          </p>
        </section>
      </div>
    </div>
  );
}
