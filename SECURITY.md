# Security

## Secret Handling

Never commit real secrets.

Store these values in Vercel environment variables, a cloud secret manager, or
another deployment secret store:

- `DATABASE_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `GOOGLE_ALLOWED_EMAILS`
- `AUTH_SECRET`
- `KANBAN_AGENT_TOKEN`
- model-provider API keys

Use `.env.example` only for placeholders.

## Token Defaults

Generate secrets with a cryptographically secure random generator.

```sh
openssl rand -base64 32
```

The early-stage shared agent token is convenient but coarse. Rotate it if it is
ever exposed, and prefer per-agent scoped tokens as the deployment matures.

## Access Control

Recommended defaults:

- require Google OAuth login for human users
- allow only explicitly listed emails
- require bearer-token auth for agent writes
- log every mutation
- use soft deletes
- create manual backups before large agent operations

## Data Safety

- Do not print transcript text in public logs.
- Do not send secrets to model providers.
- Do not store service-account key files if keyless auth is available.
- Keep production transcript packages out of git.
- Bound backup retention so database growth is predictable.

