# Task Inbox Template Agent Guide

## Current Goal

Maintain a public-ready template for a human-in-the-loop Kanban that turns
authorized transcripts and work context into reviewable task candidates.

## Architecture Rules

- Keep this repo generic. Do not add Surplus Compute board data, transcripts,
  company-specific project names, Google Doc URLs, real emails, or secrets.
- Automation proposes work; humans decide. Automated task candidates must land
  in a review column such as `Automated`.
- Use minimum Google scopes and document every data source.
- Keep the model-provider layer pluggable. Do not assume every deployment uses
  local Claude Code.
- Treat local Claude Code as a personal/internal option, not the public
  production recommendation.
- Do not use Workspace data to train, fine-tune, improve, benchmark, or build
  generalized AI models.

## Repo Layout

- `README.md`: public entry point.
- `PRIVACY.md`, `LIMITED_USE_DISCLOSURE.md`, `SECURITY.md`: required public
  policy docs.
- `docs/`: setup, architecture, and publication checklist.
- `prompts/`: copy-paste prompts for setup agents.
- `scripts/`: validation helpers.
- `app/`: reserved for a future minimal implementation or example app.

## Local Commands

```sh
npm run check
```

## Safety

- Never commit real `.env` files.
- Never print secret values.
- Never add sample transcripts that came from a real meeting.
- Before publication, run the checklist in `docs/PUBLICATION_CHECKLIST.md`.
