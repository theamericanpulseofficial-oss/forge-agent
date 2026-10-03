# Forge Agent

Single-file AI website-building agent (modes: Plan, Build, Plan + Build). No build step.

## Deploy (recommended: GitHub import, so the /api/proxy function works)
1. Create a GitHub repo and upload these files (keep the folders).
2. Netlify: Add new site -> Import from Git. Vercel: Add New -> Project (Framework: Other, no build command).
Quick static only: drag the folder to https://app.netlify.com/drop (everything works except NVIDIA / proxy).

## Use
1. Settings: pick a provider, paste a key, type to search models (or "Fetch all models").
2. Chat: pick a mode, describe the site. Files tab shows the project tree.
3. Push to GitHub from Settings (token link included), or export ZIP.

NVIDIA NIM blocks browser calls (CORS), so it goes through /api/proxy. Keys stay in your browser.
