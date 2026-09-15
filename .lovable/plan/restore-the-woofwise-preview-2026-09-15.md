# Restore the WoofWise preview

## Goal
Make the current WoofWise app load reliably instead of showing a blank screen, without changing its content or adding features.

## Plan
1. Standardize the project on the Vite app already used by the Lovable preview, removing the conflicting Next.js startup path.
2. Fix the Vite configuration so the development helper loads correctly and no longer prevents startup.
3. Add the missing `build:dev` command and align the remaining run/build commands with Vite.
4. Correct the styling setup so the existing WoofWise home and About pages render visibly and consistently.
5. Verify the home page and About link in desktop and mobile-sized previews, and confirm there are no startup or browser errors that block rendering.

## Technical details
- Keep `src/main.tsx` and `src/App.tsx` as the active application entry points.
- Remove obsolete Next.js-only configuration and dependencies only where they conflict with startup.
- Preserve the existing Lovable Cloud connection files and do not edit generated backend files.
- Treat the current hydration warning as unrelated browser-extension noise; it is not the blank-screen cause.
