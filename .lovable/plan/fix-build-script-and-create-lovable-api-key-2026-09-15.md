# Fix build script and create Lovable API key

## What we will do

1. Add the missing `build:dev` script to `package.json` so Lovable builds stop failing.
   - Insert `"build:dev": "vite build --mode development"` in the `scripts` section.
   - Keep the existing scripts intact.

2. Create the project's `LOVABLE_API_KEY` secret so Lovable Cloud features (AI Gateway, connectors, etc.) are available.
   - This is auto-provisioned by Lovable; the tool mints the key and stores it securely.
   - No value is exposed in chat.

## Expected outcome

- `npm run build:dev` will resolve instead of failing with "Script not found".
- The project will have a managed `LOVABLE_API_KEY` configured.