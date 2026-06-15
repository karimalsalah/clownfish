---
repo: openclaw/openclaw
cluster_id: pr-close-canary-76545-close-wave-20260616a
mode: execute
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
  - "#90194"
candidates:
  - "#76545"
  - "#90194"
cluster_refs:
  - "#76545"
  - "#90194"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #76545 was planned as superseded of open canonical #90194 in run 27521468883. Re-fetch live state and only close if #76545 remains open and #90194 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-5-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #76545

## Goal

Run one live close-only cleanup pass. Hydrate #76545 and #90194, then emit at most one planned close action for #76545. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #76545 fix(cron): sweep base cron sessions, not just run sessions
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T20:08:43Z
- canonical/candidate: #90194 fix(cron): sweep isolated-target base cron sessions under sessionRetention
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27521468883.json

## Instructions

If #76545 is still open and #90194 is still open, prefer `close_superseded` with `canonical: "#90194"` for #76545. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
