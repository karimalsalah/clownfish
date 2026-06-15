---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92301-close-wave-20260616a
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
  - "#92454"
candidates:
  - "#92301"
  - "#92454"
cluster_refs:
  - "#92301"
  - "#92454"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92301 was planned as superseded of open canonical #92454 in run 27520940283. Re-fetch live state and only close if #92301 remains open and #92454 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-35-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #92301

## Goal

Run one live close-only cleanup pass. Hydrate #92301 and #92454, then emit at most one planned close action for #92301. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92301 #92285: fix: reconcile orphaned managed flows when all child tasks are terminal
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T19:31:29Z
- canonical/candidate: #92454 fix(tasks): reconcile stale subagent tasks when backing CLI child is terminal (fixes #92285)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27520940283.json

## Instructions

If #92301 is still open and #92454 is still open, prefer `close_superseded` with `canonical: "#92454"` for #92301. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
