export interface LessonData {
  id: number;
  title: string;
  video_url?: string;
  text_content: string;
}

export const programInfo = {
  title: 'Total Recall',
  description: 'A 6-lesson program to teach reliable recall in all environments.',
  goal: 'Dog returns to owner when called, regardless of distractions. Training is enjoyable and personalized.',
};

export interface Step {
  text: string;
  // Future: iconName?: string;
}

export interface LessonDetail extends LessonData {
  steps: Step[];
}

export const lessons: LessonDetail[] = [
  {
    id: 1,
    title: 'Name Game + Bond Boost',
    video_url: '',
    text_content: 'Intro: Teach dog to respond positively to their name. Builds bond and attention.',
    steps: [
      { text: 'Say [dog_name] in a happy voice → reward immediately.' },
      { text: 'Repeat 5 times per session, 3 times daily.' },
      { text: 'Track response time: fast / slow / ignored.' },
    ],
  },
  {
    id: 2,
    title: 'Personalized Recall Cue',
    video_url: '',
    text_content: 'Intro: Set a unique recall cue (e.g., "Come", "Here", "Let’s go").',
    steps: [
      { text: 'Say [dog_name] + [recall_cue] → toss reward behind you.' },
      { text: 'Repeat indoors with minimal distractions.' },
      { text: 'Reinforce fast responses.' },
    ],
  },
  {
    id: 3,
    title: 'Recall on a Long Line',
    video_url: '',
    text_content: 'Intro: Introduce distance and control using a long leash.',
    steps: [
      { text: 'Attach a 15-30 ft leash.' },
      { text: 'Call your dog → reward immediately upon arrival.' },
      { text: 'Track success percentage (manual input).' },
    ],
  },
  {
    id: 4,
    title: 'With Light Distractions',
    video_url: '',
    text_content: 'Intro: Increase reliability in busier environments.',
    steps: [
      { text: 'Set distractions at a distance (dogs, people, toys).' },
      { text: 'Cue your dog → reward if successful.' },
      { text: 'If failed, reduce distraction and retry.' },
    ],
  },
  {
    id: 5,
    title: 'Emergency Recall Word',
    video_url: '',
    text_content: 'Intro: Teach a recall word for emergencies only (e.g., "Now!").',
    steps: [
      { text: 'Practice once daily with high-value rewards.' },
      { text: 'Never use except for emergencies.' },
      { text: 'Log response strength.' },
    ],
  },
  {
    id: 6,
    title: 'Off-Leash Simulation',
    video_url: '',
    text_content: 'Intro: Test full recall in a safe, fenced area or on a trail.',
    steps: [
      { text: 'Begin play → call your dog randomly.' },
      { text: 'If recalled, release back to play.' },
      { text: 'Use positive reinforcement only.' },
    ],
  },
];