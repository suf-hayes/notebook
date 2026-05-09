# Workflows

The deploy workflow lives at `/deploy-workflow.yml` (repo root) in this PR
because the bot account that opened this PR cannot push files under
`.github/workflows/` — GitHub blocks non-admin actors from creating or
modifying workflow execution paths.

## Manual step required after merging

Move the file into place so GitHub Actions will pick it up:

```sh
git mv deploy-workflow.yml .github/workflows/deploy.yml
git commit -m "Move deploy workflow into .github/workflows"
git push
```

## Required repository secret

The workflow runs `wrangler deploy` and needs a Cloudflare API token. Before
the first run, add a repository secret:

- **Name:** `CLOUDFLARE_API_TOKEN`
- **Value:** a token with `Workers Scripts: Edit` (and `Account: Cloudflare Pages: Read` if you want it scoped consistently with the migration token).

Settings → Secrets and variables → Actions → New repository secret.
