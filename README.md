# WoofWise

WoofWise is a structured, multi-week dog training application designed for everyday dog owners. It provides a positive, engaging training experience that focuses on leash-free training, flexible learning, and user engagement, ensuring dogs learn important behaviors through enjoyable, phased lessons rather than tedious busywork.

## Focus and Goals
**Effective Dog Training:** Provide a clear, structured program to help owners train obedient, well-behaved dogs.
**Enjoyable Process:** Make training fun and rewarding for both dog and owner using positive reinforcement techniques.
**Leash-Free Training:** Teach commands and behaviors without over-reliance on a leash, fostering independence and trust.
**Flexible Learning:** Support self-paced progression with ongoing lessons and continuous learning content.
**User Engagement:** Track progress with clear milestones, progress reports, and motivational rewards.

## Key Sections of WoofWise
1. **Home Page**
   - Hero message: Train Smarter. Go Leashless. Build Real Trust.
   - CTA: Get Started (new users), Login (returning users).
   - Brief program overview.
2. **Sign-Up / Login**
   - New users: first name, last name, email, password.
   - Returning users: email, password, password recovery.
3. **Dashboard**
   - List of user’s dogs with names, training levels, and progress.
   - Add new dog.
   - Quick links to ongoing lessons and progress overview.
4. **Dog Profile**
   - Dog details: name, breed, age, photo.
   - Training level and completed lessons.
   - Update dog information.
5. **Training Program**
   - Structured week-by-week lessons (Week 1–6+).
   - Core lessons (video/text), mark In Progress or Completed.
   - Ongoing lessons library for advanced techniques.
6. **Progress Tracker**
   - Visual charts and milestones showing lesson completions and levels.
   - Notifications for achievements.
7. **Help & Support**
   - FAQs, contact support, community forum links, additional resources.

## Data Model (Supabase Schema)
The initial database schema is defined in `supabase/schema.sql`:
```sql
-- profiles (user metadata)
-- dogs (id, user_id, name, breed, age, level, profile_pic_url)
-- lessons (id, title, week_number, video_url, text_content, type)
-- user_lessons (tracking status per user/dog/lesson)
```

## Getting Started
1. Copy environment variables:
   ```bash
   cp .env.local.example .env.local
   # Fill in your Supabase URL and ANON key
   ```
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Contributing & Deployment
- Commit your changes and push to GitHub:
  ```bash
  git add .
  git commit -m "chore: update README with WoofWise focus and goals"
  git push
  ```
- For production builds:
  ```bash
  npm run build
  npm start
  ```

---
Empower your dog training journey with WoofWise—where smart structure meets joyful learning.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
