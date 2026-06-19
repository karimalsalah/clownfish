---
repo: "openclaw/openclaw"
cluster_id: "repair-94022-agent-turn-compat-plan-20260619"
mode: plan
allowed_actions:
  - fix
  - raise_pr
  - merge
blocked_actions:
  - comment
  - label
  - close
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
  - unclear_canonical
canonical:
  - "#94022"
candidates:
  - "#94022"
cluster_refs:
  - "#94022"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-94022-agent-turn-compat-plan-20260619"
source: clawsweeper_followup
repair_strategy: "repair_contributor_branch"
---

# Agent-Turn Compatibility Follow-Up #94022

Re-hydrate open contributor PR #94022 from live GitHub state. The current head
`5acba550a066a572a3ad40efc46750183fcae65d` moved the startup catch-up
deferral marker into service state, but ClawSweeper identified a concrete
compatibility regression: `src/cron/service/jobs.ts` no longer preserves
early deferred `agentTurn` slots when the in-memory pending set is absent.

## Goal

Produce a narrowly bounded repair plan for the existing contributor branch:

- Preserve the shipped `agentTurn` early-slot behavior unless an explicit,
  upgrade-safe migration is necessary and proven.
- Keep the state-owned overflow-deferral fix for the linked startup/recompute
  clobber bug.
- Add or retain focused regression coverage proving both the pending overflow
  deferral and a pre-existing deferred `agentTurn` slot survive maintenance
  recompute.
- Specify privacy-safe, redacted real-runtime proof that the overflow deferral
  survives a cron list/status or equivalent maintenance path before the
  staggered tick.

## Guardrails

- Re-fetch the current PR head, checks, comments, review threads, and current
  `main` before planning.
- Treat the ClawSweeper P1 finding at `src/cron/service/jobs.ts:239` as a
  required repair item, not a historical note.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep any repair inside the current cron deferral surface. Escalate if it
  needs a persisted schema migration, broad scheduler rewrite, or unrelated
  cron behavior changes.
- Preserve Jah-xy's contributor credit and repair the existing branch rather
  than creating a replacement when the branch remains editable.
- Do not treat unit-test output as sufficient merge proof; require redacted
  real-runtime evidence and a fresh ClawSweeper review after a repair.
