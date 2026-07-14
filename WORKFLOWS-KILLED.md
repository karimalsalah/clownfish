# openclaw Actions drain — KILLED (2026-07-13)

_Estate consolidation (ASCENSION 2026-07-11 KILL order — openclaw automation drains SteadyWrk compute
for an external estate). Branch `claude/steadywrk-repo-consolidation-o0eb85`._

## What was removed (9 workflows — the OpenClaw cluster-maintainer fleet)

`checks-success-preflight-intake` · `cluster-batch` · `cluster-worker` · `comment-router` ·
`commit-finding-intake` · `external-merge-preflight` · `finalize-open-prs` · `publish-results` ·
`self-heal`

These operate the external OpenClaw estate's issue/PR cleanup (Codex workers on paid `blacksmith-*`
runners, `repository_dispatch`/schedule/cron intake).

## What was kept

- `validate.yml` — this repo's own push/PR CI (job-spec validation + script tests).
- All security fixes in code — untouched.
- Repo content as read-only reference; disposition per `ESTATE-DISPOSITION.md`.

## ⚠️ Until this merges, dispatch-triggered runs can still fire from the default branch

Immediate kill (V one-tap, reversible):

```bash
gh api repos/karimalsalah/clownfish/actions/workflows --jq '.workflows[] | select(.name != "validate") | .path' \
  | xargs -I{} basename {} | xargs -I{} gh workflow disable {} --repo karimalsalah/clownfish
```
