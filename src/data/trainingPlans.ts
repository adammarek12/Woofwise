export interface TrainingPhase {
  title: string;
  timeframe: string;
  steps: string[];
}

export interface TrainingPlan {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  whyItWorks: string;
  safetyNote?: string;
  materials: string[];
  phases: TrainingPhase[];
  dailyPractice: string;
  troubleshooting: string[];
}

export const trainingPlans: TrainingPlan[] = [
  {
    slug: 'recall',
    title: 'Recall / Come When Called',
    subtitle: 'A foundational safety behavior built on reward, never pressure.',
    overview:
      'Teaches your dog that coming to you is always the best thing that could happen — every time, no exceptions. This is a foundational safety behavior.',
    whyItWorks:
      'Recall is one of the best-studied behaviors in dog training. Research (Cooper et al. 2014; China et al. 2020) found no advantage for e-collar training over reward-based methods on recall reliability — and reward-trained dogs showed less stress. Positive reinforcement recall also improves faster over time because the dog is building a strong, growing reinforcement history rather than working to avoid something unpleasant.',
    materials: [
      'High-value treats (small, soft, something your dog rarely gets otherwise)',
      'A 15–30 ft long line',
      'A quiet, low-distraction starting space',
    ],
    phases: [
      {
        title: 'Build the Association',
        timeframe: 'Days 1–5, indoors',
        steps: [
          'Say your dog\'s recall word ("Come!") in a happy, upbeat tone, then immediately produce a treat — every single time, regardless of what the dog was doing.',
          'Practice 5–10 reps per session, 2–3 sessions per day.',
          'Never call your dog to do something unpleasant (bath, nail trim) during this phase.',
        ],
      },
      {
        title: 'Add Distance and Distraction',
        timeframe: 'Days 6–14',
        steps: [
          'Practice recall from another room, then in the backyard, then with mild distractions (another person, a toy on the ground).',
          'Use the long line so the dog can\'t "opt out" and self-reinforce by ignoring you.',
          'Reward jackpot-style (multiple treats in a row) for especially fast or enthusiastic responses.',
        ],
      },
      {
        title: 'Generalize',
        timeframe: 'Weeks 3–4+',
        steps: [
          'Practice recall on walks, at the park, and in new environments, always leashed or long-lined until reliability is proven.',
          'Gradually reduce treat frequency but never eliminate reinforcement entirely — vary it (treats, play, praise) to keep the behavior strong.',
        ],
      },
    ],
    dailyPractice:
      '3–5 minutes, 2–3x per day is more effective than one long session. Track reps and success rate.',
    troubleshooting: [
      "If your dog stops responding, you've likely progressed too fast — return to an easier distance or distraction level.",
      'Never call your dog and then punish them for a slow response; this teaches dogs that "come" predicts something bad.',
    ],
  },
  {
    slug: 'loose-leash-walking',
    title: 'Loose Leash Walking',
    subtitle: 'Pulling never works; a loose leash always does.',
    overview:
      'Teaches your dog that a loose leash — not pulling — is what gets them where they want to go.',
    whyItWorks:
      'Dogs pull because pulling has historically worked (it gets them forward, faster). The core mechanic across credible force-free methods is removing the reward for pulling (forward motion stops) while reinforcing loose-leash behavior generously. No leash-popping or correction is needed or shown to work better.',
    materials: [
      'Front-clip harness (recommended over a neck collar for pullers)',
      'High-value treats',
      'A quiet starting location',
    ],
    phases: [
      {
        title: 'Engagement Indoors',
        timeframe: 'Days 1–4',
        steps: [
          'Reward your dog simply for checking in or looking at you while leashed, in a low-distraction room.',
          'Build a strong "checking in with me is rewarding" association before adding movement.',
        ],
      },
      {
        title: 'The Stop-and-Go Method',
        timeframe: 'Days 5–12',
        steps: [
          'Begin walking. The instant the leash goes tight, stop moving completely ("be a tree").',
          'Wait for slack to return to the leash (dog stops pulling or turns back toward you) — do not pull the dog back.',
          'The moment the leash is loose, mark ("Yes!") and resume walking.',
          'Consistency is everything: pulling should never, ever get the dog where it wants to go.',
        ],
      },
      {
        title: 'Real-World Generalization',
        timeframe: 'Weeks 3+',
        steps: [
          'Practice in gradually more distracting environments (yard → quiet street → busier areas).',
          'Allow designated "sniff breaks" on a cue, so your dog learns loose leash is the default expectation, not sniffing suppression.',
        ],
      },
    ],
    dailyPractice:
      "Every walk is a training opportunity — you don't need separate sessions, just consistency on every walk from day one.",
    troubleshooting: [
      'Progress is often slow at first because dogs have a long reinforcement history of successful pulling.',
      'Stay consistent — even one leash-pop or "give in" resets progress by reinforcing pulling intermittently, which is the hardest reinforcement pattern to break.',
    ],
  },
  {
    slug: 'stop-jumping',
    title: 'Stop Jumping on People',
    subtitle: 'Turn excited jumping into a polite, rewarded greeting.',
    overview:
      'Redirects your dog\'s greeting instinct (jumping to reach your face) into a polite, rewarded "four on the floor" or sit greeting.',
    whyItWorks:
      'Jumping persists because it\'s usually accidentally reinforced — even a scolding or push is attention, and attention is often exactly what the dog wants. The evidence-based fix is to remove all reinforcement for jumping (no eye contact, touch, or talking) and heavily reward the calmer alternative behavior instead. This "differential reinforcement" approach is well-supported and far more reliable than punishment-based suppression.',
    materials: [
      'Treats',
      'Willing "practice guests" for later phases',
      'An exercise pen or baby gate (optional, for managing greetings early on)',
    ],
    phases: [
      {
        title: 'Remove the Reward',
        timeframe: 'Days 1–5',
        steps: [
          'The instant your dog jumps, become "boring": no eye contact, no talking, turn away, cross your arms.',
          'The moment all four paws are on the floor, immediately reward with calm praise and a treat.',
        ],
      },
      {
        title: 'Reward the Alternative',
        timeframe: 'Days 6–12',
        steps: [
          'Teach and reinforce a sit-to-greet: ask for a sit as you or a guest approaches, and reward generously when offered.',
          'Practice with low-key family members before real guests.',
        ],
      },
      {
        title: 'Generalize to Real Greetings',
        timeframe: 'Weeks 3+',
        steps: [
          'Practice with a gate or pen for real guest arrivals at first, rewarding calm behavior behind the barrier before removing it.',
          "Enlist friends to help — brief them beforehand so they don't accidentally reward jumping.",
        ],
      },
    ],
    dailyPractice:
      'Short, frequent reps at every natural greeting opportunity (you coming home, family entering a room) work better than staged-only sessions.',
    troubleshooting: [
      'If jumping increases at first, that\'s a normal "extinction burst" — stay consistent, it typically resolves within days if reinforcement is truly withheld every time.',
    ],
  },
  {
    slug: 'crate-training',
    title: 'Crate Training',
    subtitle: 'A safe den your dog chooses — never a punishment.',
    overview:
      'Builds a genuine, voluntary positive association with the crate as a safe den — not a punishment tool.',
    whyItWorks:
      'A crate introduced too fast, or ever used as punishment, is one of the most common causes of crate anxiety. The desensitization and counter-conditioning approach — gradual exposure paired with high-value rewards, always staying below the dog\'s stress threshold — is the standard veterinary-behaviorist protocol (AVSAB) for building comfort with confinement safely.',
    materials: [
      'A properly sized crate (dog can stand, turn around, and lie down comfortably — not much larger)',
      'High-value treats',
      'A favorite chew or stuffed food toy',
      'Comfortable bedding',
    ],
    phases: [
      {
        title: 'Make It Inviting',
        timeframe: 'Days 1–3',
        steps: [
          'Leave the crate door open in a social area of the house.',
          'Toss treats near, then just inside, the entrance — let the dog explore at its own pace, no coercion.',
          'Feed meals near or just inside the open crate.',
        ],
      },
      {
        title: 'Short, Positive Stays',
        timeframe: 'Days 4–10',
        steps: [
          'Once your dog enters voluntarily, feed a meal or give a stuffed chew toy inside with the door open, for a few minutes at a time.',
          'Begin closing the door briefly during a high-value chew session, opening it again before any whining starts.',
          'Gradually extend duration.',
        ],
      },
      {
        title: 'Building Duration and Independence',
        timeframe: 'Weeks 2–4+',
        steps: [
          "Extend crate time gradually while you're home, then practice brief departures.",
          "Watch for stress signals (panting, whining, escape attempts) — if seen, you've progressed too fast; scale back to the last comfortable duration.",
        ],
      },
    ],
    dailyPractice:
      'Several short, successful crate sessions per day beat one long forced session. Never rush past signs of stress.',
    troubleshooting: [
      "If whining occurs, don't let the dog out until it stops (even briefly) — releasing during whining teaches the dog that whining works.",
      'A crate is not a fix for true separation anxiety. If your dog shows panic-level distress, that requires a broader desensitization protocol and, often, professional support.',
    ],
  },
  {
    slug: 'potty-training',
    title: 'Potty Training',
    subtitle: 'Schedule, supervision and reward — never punishment.',
    overview:
      'Builds a reliable outdoor-elimination habit through schedule, supervision, and reinforcement — not punishment for accidents.',
    whyItWorks:
      "Housetraining research and shelter-behavior guidance agree: reinforcing successful outdoor elimination works, while punishing accidents backfires — it teaches dogs to hide when eliminating rather than to prefer the outdoors. A predictable schedule leverages a puppy's natural bladder-holding limits (roughly one hour per month of age) to set them up to succeed rather than fail.",
    materials: [
      'Treats',
      'A designated outdoor potty spot',
      'An enzymatic cleaner for accidents',
      'A potty log',
    ],
    phases: [
      {
        title: 'Schedule and Supervision',
        timeframe: 'Week 1',
        steps: [
          'Take your dog out first thing in the morning, after every meal, after play, after naps, and last thing at night.',
          'Add a break every 1–2 hours in between for young puppies.',
          "Supervise closely indoors; use a confined area (pen, crate, or tether) when you can't watch directly.",
        ],
      },
      {
        title: 'Reinforce Success',
        timeframe: 'Weeks 2–3',
        steps: [
          'The moment your dog finishes eliminating outside, immediately praise and reward with a treat — timing matters, reward after they finish, not mid-stream.',
          'Log every success and accident to spot patterns (timing, triggers).',
        ],
      },
      {
        title: 'Extend Independence',
        timeframe: 'Week 4+',
        steps: [
          "Gradually widen the dog's supervised roaming area indoors as accident-free stretches lengthen.",
          'Extend time between scheduled outdoor breaks as bladder control matures.',
        ],
      },
    ],
    dailyPractice:
      'Consistency beats intensity — same spot, same schedule, same calm reaction to accidents, every day.',
    troubleshooting: [
      'If an accident happens, clean thoroughly with an enzymatic cleaner (regular cleaners can leave scent traces that draw the dog back).',
      "Never rub a dog's nose in an accident or scold after the fact — dogs don't connect the punishment to the act, only to your presence, which can create fear or hiding behavior.",
    ],
  },
  {
    slug: 'resource-guarding',
    title: 'Resource Guarding (Basic)',
    subtitle: 'Teach your dog that your approach means something better arrives.',
    overview:
      'A foundational, prevention-focused protocol for mild guarding of food, toys, or space — teaching your dog that a person approaching a resource predicts something better, not a loss.',
    whyItWorks:
      'Growling, freezing, or stiffening over a resource is a dog\'s normal communication, not "disrespect" — traditional corrections (taking the item by force, scolding) can escalate guarding by confirming the dog\'s fear that approach equals loss. The evidence-based approach used by veterinary behaviorists is desensitization and counter-conditioning: pairing a person\'s approach with something the dog values even more than what they\'re guarding.',
    safetyNote:
      'This basic protocol is for mild guarding (stiffening, fast eating, mild growling) only. Any dog showing snapping, biting, or lunging needs an in-person certified trainer or veterinary behaviorist — do not attempt these do-it-yourself steps in those cases. Please seek professional help instead.',
    materials: [
      'Two treat types — the resource itself (e.g. regular kibble) and something higher-value (e.g. chicken, cheese)',
      'One target practiced at a time (food, toy, or location)',
    ],
    phases: [
      {
        title: 'Build a Positive Approach Association',
        timeframe: 'Days 1–7',
        steps: [
          "While your dog eats a normal meal from their bowl, calmly walk by at a distance that doesn't trigger any tension.",
          'Toss a higher-value treat toward (not directly at) the bowl, then keep walking.',
          "Don't linger or reach toward the bowl yet.",
          "Repeat across multiple meals until your dog's body visibly relaxes or looks up expectantly as you approach.",
        ],
      },
      {
        title: 'Closing the Distance',
        timeframe: 'Weeks 2–3',
        steps: [
          'Gradually decrease the distance of your pass-by over many repetitions, always tossing the higher-value treat as you go.',
          'Watch closely for relaxed body language before progressing.',
          'Never take the resource away during this phase.',
        ],
      },
      {
        title: 'Adding a Hand Near the Bowl',
        timeframe: 'Weeks 3–4+, only after Phase 2 success',
        steps: [
          'Approach, pause briefly near the bowl, drop a high-value treat directly into it, and step back.',
          "Progress only as fast as your dog's relaxed body language allows; if you see any stiffening, return to the previous step.",
        ],
      },
    ],
    dailyPractice:
      'Practice within normal daily routines (mealtimes) rather than staged extra sessions.',
    troubleshooting: [
      'Never attempt to test the dog by forcibly grabbing the resource to "see if it\'s fixed."',
      'If guarding intensity increases at any point, stop the DIY protocol and get in-person professional help.',
    ],
  },
];

export const getTrainingPlan = (slug?: string) =>
  trainingPlans.find((plan) => plan.slug === slug);
