# Architecture

## Components

```text
Google Workspace
  Gmail notes email
  Google Docs transcript
        |
        v
Transcript pickup
  reads authorized source artifacts
  writes transcript package queue
        |
        v
Model extractor
  reads full transcript package
  returns task candidates
        |
        v
Kanban API
  dedupes against live board
  writes candidates to Automated
  logs events and backups
        |
        v
Human review board
  edit, promote, archive, delete
```

## Data Tables

Suggested Postgres tables:

- `kanban_state`: current board JSON.
- `kanban_events`: append-only mutation log.
- `kanban_backups`: bounded full-board snapshots.
- `kanban_transcript_packages`: queued transcript packages and processing
  status.
- `kanban_source_ledger`: processed source IDs, for example Gmail message IDs.

## Human-In-The-Loop Rule

Automated extraction should not commit work directly. It should create
candidates in `Automated`. The reviewer decides what becomes backlog or active
work.

## Model Provider Boundary

The extractor should be behind a provider interface:

```text
extractTasks({ transcriptPackage, auditContext }) -> taskCandidates[]
```

This keeps the template portable across Anthropic, OpenAI, Vertex, Bedrock, or
local/internal CLI workflows.

