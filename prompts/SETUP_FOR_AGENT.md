# Setup Prompt For An Agent

Use this prompt with Codex, Claude, or another local coding agent after you have
created the Google, Vercel, Neon, and model-provider accounts.

```text
Set up this Automated To-do's human-in-the-loop Kanban for my organization.

Rules:
- Do not print secrets.
- Do not commit real credentials.
- Use .env.example only as a placeholder reference.
- Store deployment secrets in Vercel or the selected secret manager.
- Use minimum Google scopes.
- Do not ingest transcripts until I confirm the source and consent posture.
- Do not use Workspace data to train, fine-tune, improve, benchmark, or build
  generalized AI models.
- Automated task candidates must land in the Automated column for human review.
- Default automated candidates to no due date and neutral priority unless the
  source explicitly says otherwise.
- Read the live board before creating tasks and merge likely duplicates by
  appending source context.
- Create a manual backup before any bulk write.

Tasks:
1. Inspect this repo and summarize the deployment shape.
2. Confirm required environment variables are present without printing values.
3. Initialize the Neon schema.
4. Verify Google auth with Gmail readonly and Docs readonly scopes.
5. Verify model-provider credentials with a tiny non-sensitive prompt.
6. Run a transcript pickup dry run.
7. Run task extraction as a dry run.
8. Create a manual backup.
9. Run one write pass into Automated only after I approve.
10. Show me the board URL and the automation-status checks.
```

