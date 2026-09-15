# Plan: Add Claude (Anthropic) integration to WoofWise

## Goal
Let users interact with Claude inside WoofWise without exposing any API key in the browser, while respecting that `LOVABLE_API_KEY` cannot be copied out of Lovable Cloud.

## Why you can't copy `LOVABLE_API_KEY`
`LOVABLE_API_KEY` is auto-managed by Lovable and is only usable by Lovable Cloud services (connectors, AI Gateway, edge functions). The Secrets UI intentionally hides its value. It is not an Anthropic key and should not be shared with external tools or pasted into Claude.

## What we will build
1. **User-provided Anthropic API key flow**
   - Add a secure settings page where the user can save their own Anthropic API key as a Lovable secret (e.g. `ANTHROPIC_API_KEY`).
   - The value is write-only from the UI; it is never rendered back.

2. **Edge function: `claude-chat`**
   - Deploy a Supabase Edge Function that reads `ANTHROPIC_API_KEY` from secrets.
   - Accept a prompt from the frontend and call the Anthropic Messages API (`https://api.anthropic.com/v1/messages`).
   - Return the Claude response to the frontend.
   - Include basic guardrails: max tokens, system prompt, and error handling.

3. **Frontend: Claude training assistant page**
   - Add a new route `/coach` (or `/training/coach`).
   - Provide a chat-style interface where the user asks training questions.
   - Send requests to the `claude-chat` edge function.
   - Show loading states and error messages.

4. **Navigation link**
   - Add a "Claude Coach" link in the Navbar so users can reach the assistant.

## Files and locations to change
- `src/pages/ClaudeCoach.tsx` — new chat UI
- `src/components/Navbar.tsx` — add navigation link
- `src/App.tsx` — add `/coach` route
- `supabase/functions/claude-chat/index.ts` — new edge function
- `supabase/config.toml` or Lovable Cloud deploy step for the function

## Security notes
- `ANTHROPIC_API_KEY` is stored as a runtime secret and only used server-side in the edge function.
- The frontend never sees the key.
- `LOVABLE_API_KEY` remains untouched and is not used for Anthropic calls.

## Out of scope
- Billing/payment for Claude usage.
- Persisting chat history.
- Fine-tuning or custom model deployment.
