# Setup

## 1. Create Deployment Accounts

Create or choose:

- a GitHub repository for this template
- a Vercel project
- a Neon Postgres database
- a Google Cloud project
- a model provider account

## 2. Configure Google Access

For personal/internal testing, local OAuth or ADC can work.

For a Workspace deployment, prefer:

- a Google Cloud project owned by the deploying organization
- a service account
- domain-wide delegation if the organization wants background pickup
- minimum scopes:

```text
https://www.googleapis.com/auth/gmail.readonly
https://www.googleapis.com/auth/documents.readonly
```

The deploying organization must authorize the scopes and confirm participant
notice/consent requirements.

## 3. Configure Vercel

Set the variables from `.env.example` in Vercel, not in git.

Required:

```text
APP_BASE_URL
AUTH_SECRET
DATABASE_URL
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
GOOGLE_ALLOWED_EMAILS
KANBAN_AGENT_TOKEN
MODEL_PROVIDER
```

Then deploy.

## 4. Configure Neon

Use a database URL with TLS enabled. Keep the URL in Vercel environment
variables or a secret manager.

Recommended tables are listed in [ARCHITECTURE.md](./ARCHITECTURE.md).

## 5. Configure Model Provider

Pick one provider and set only the credentials it needs.

Production recommendation:

- Anthropic API, OpenAI API, Vertex, or Bedrock.

Personal/internal option:

- local Claude Code CLI, only when the deployer understands and accepts that
  auth and data-handling path.

## 6. Run First Ingest

Start with a dry run:

```sh
npm run ingest:dry-run
```

Then create a manual backup before enabling writes:

```sh
npm run backup:create
```

Then run one write pass:

```sh
npm run ingest
```

## 7. Turn On Automation

Choose one:

- local scheduler for personal/internal use
- Cloud Run plus Cloud Scheduler for Workspace background pickup
- another job runner controlled by the deploying organization

The scheduler should be incremental and maintain a source ledger so downtime can
be backfilled.

