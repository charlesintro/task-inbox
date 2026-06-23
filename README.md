# Automated To-do's Template

A human-in-the-loop Kanban for turning authorized meeting transcripts and other
work context into reviewable task candidates.

This template is intentionally generic. It does not include private transcripts,
company board data, API keys, OAuth credentials, model-provider credentials, or
deployment-specific secrets.

## What This Is

Automated To-do's is an operating pattern:

1. Collect authorized work context, such as Google Meet notes transcripts.
2. Ask a model provider to extract durable shared task candidates.
3. Deduplicate against the existing board.
4. Put new candidates in `Automated`.
5. Let humans review, edit, promote, delete, or archive the work.

The system is not meant to silently commit work on behalf of humans. Automation
proposes; humans decide.

## Default Product Rules

- New automated items land in `Automated`, not directly in `Backlog`.
- Automated items default to no due date unless the source explicitly commits to
  one.
- Automated items default to neutral priority.
- Duplicate detection checks the live board before creating cards.
- Likely duplicates should append source context to the existing card instead
  of creating a second card.
- Completed and deleted cards are not merge targets.
- Backups are enabled before broad agent edits.
- Transcript ingestion is incremental and records which source artifacts were
  processed.
- Search should include archived and deleted items when the user asks for them.

## Suggested Stack

- Vercel for web app and API hosting.
- Neon Postgres for board state, event log, backups, and transcript queue.
- Google Workspace APIs for authorized Gmail/Docs transcript pickup.
- A pluggable model provider for extraction:
  - Anthropic API
  - OpenAI API
  - Vertex AI
  - Bedrock
  - local Claude Code only as an explicit personal/internal mode

## Human Consent And Workspace Data

Before deploying this, read:

- [PRIVACY.md](./PRIVACY.md)
- [LIMITED_USE_DISCLOSURE.md](./LIMITED_USE_DISCLOSURE.md)
- [SECURITY.md](./SECURITY.md)

You are responsible for confirming that you are authorized to process the
meetings, transcripts, emails, and documents you ingest.

## Quick Start

1. Create a new repo from this template.
2. Create a Google Cloud project and OAuth or domain-wide delegation setup.
3. Create a Neon database.
4. Create a Vercel project.
5. Pick a model provider and set its credentials.
6. Copy `.env.example` to your deployment secrets surface.
7. Follow [docs/SETUP.md](./docs/SETUP.md).
8. Give [prompts/SETUP_FOR_AGENT.md](./prompts/SETUP_FOR_AGENT.md) to Codex,
   Claude, or another local agent to finish setup.

## Public Template Boundary

This repository should stay generic:

- No real transcripts.
- No private board data.
- No real emails or domains.
- No real tokens, OAuth secrets, or database URLs.
- No company-specific project names.
- No assumptions that every deployer uses the same model provider.

