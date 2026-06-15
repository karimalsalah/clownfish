---
repo: openclaw/openclaw
cluster_id: gitcrawl-63-bulk-plan-20260615-a
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#84012"
candidates:
  - "#74085"
  - "#74185"
  - "#83560"
  - "#83862"
  - "#84001"
  - "#84012"
  - "#84698"
  - "#85002"
cluster_refs:
  - "#74085"
  - "#74185"
  - "#83560"
  - "#83862"
  - "#84001"
  - "#84012"
  - "#84698"
  - "#85002"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74185"
  - "#83560"
canonical_hint: "gitcrawl representative #84012 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 63 on 2026-06-15. Security-signal refs #74185, #83560 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 63

Generated from local gitcrawl run cluster 63 for `openclaw/openclaw`.

Display title:

> openclaw status CLI command hangs before connecting to gateway (v2026.5.18)

Cluster shape from gitcrawl:

- total members: 8
- issues: 6
- pull requests: 2
- open candidates in local store: 8
- security-signal refs requiring route_security: #74185, #83560
- representative: #84012, currently open in local store
- latest member update: 2026-06-14T04:46:07.38662Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74085 Bug: openclaw status --usage --json hangs/fails from non-TTY subprocess in 2026.4.26
- #74185 [security-signal] fix(infra): wrap provider auth resolution in timeout for status --usage --json
- #83560 [security-signal] [Bug]: openclaw configure hangs after gateway mode selection and leaves high-CPU child process
- #83862 fix(cli): add configure and onboard to interactive TTY command skip list
- #84001 Windows: openclaw status / status --json hangs in 2026.5.18 while status --all succeeds
- #84012 openclaw status CLI command hangs before connecting to gateway (v2026.5.18)
- #84698 [Bug]: openclaw status hangs and times out — regression from 2026.5.7
- #85002 openclaw config commands cause gateway to hang at 98% CPU
