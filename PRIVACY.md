# Privacy

This template processes user or organization data only to create
human-reviewed task candidates and related operational artifacts for the
deploying user or organization.

## Data Sources

Common deployments may read:

- Gmail messages that announce meeting notes or transcripts.
- Google Docs that contain meeting notes and transcript tabs.
- Existing Kanban board tasks for duplicate detection.

Deployments may add other sources, but every source should be disclosed before
it is enabled.

## Data Use

Workspace data should be used only for the user-facing feature:

- transcript packaging
- task-candidate extraction
- duplicate detection
- audit/recovery logs
- human review in the Kanban board

Workspace data should not be used to train, fine-tune, benchmark, improve, or
build generalized AI or machine-learning models.

## Retention

Recommended defaults:

- Store the current board state until the deployer deletes it.
- Store mutation events for audit and recovery.
- Store backups with bounded retention, for example weekly backups retained for
  28 days.
- Store transcript packages only as long as needed for extraction, debugging,
  and recovery.

Each deployment should define its own retention period and document it for its
users.

## Deletion

Every deployment should provide a way to:

- delete board items
- archive or delete transcript packages
- rotate tokens
- delete the database or export data before deleting it

## User Responsibility

The deployer is responsible for:

- authorization to access each data source
- participant notice or consent where required
- legal review for their jurisdiction and workplace policy
- choosing model-provider settings that match their privacy needs

