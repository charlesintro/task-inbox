# Google Workspace Limited Use Disclosure

This template is designed for deployments that may access Google Workspace user
data, such as Gmail messages and Google Docs meeting transcripts.

If you deploy this system with Google Workspace APIs, you should configure it to
meet Google's API Services User Data Policy and Workspace API User Data and
Developer Policy.

## Intended Use

The application uses Google Workspace data only to:

- find authorized transcript-ready meeting notes
- read the linked meeting notes document
- extract the transcript text
- create human-reviewed Kanban task candidates
- maintain a processing ledger so transcripts are not processed repeatedly

## Minimum Scopes

Use the narrowest scopes that support the enabled workflow.

Common transcript-pickup scopes:

```text
https://www.googleapis.com/auth/gmail.readonly
https://www.googleapis.com/auth/documents.readonly
```

Only add broader scopes, such as Drive or Tasks, when a real enabled workflow
requires them.

## No Generalized AI Training

Google Workspace data accessed by this app must not be used to train,
fine-tune, improve, benchmark, or build generalized AI or machine-learning
models.

Model calls should be configured so transcript data is used only to provide the
task-candidate feature to the deploying user or organization.

## Meeting Consent

Only ingest meetings and transcripts you are authorized to process. Do not use
this template for covert monitoring, employee surveillance, performance
scoring, or unrelated analytics.

## Human Review

Extracted tasks should land in a review column such as `Automated`. Humans must
approve, edit, or reject candidates before treating them as committed work.

