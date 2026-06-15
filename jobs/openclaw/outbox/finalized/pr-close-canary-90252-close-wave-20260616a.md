---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90252-close-wave-20260616a
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
  - "#90267"
candidates:
  - "#90252"
  - "#90267"
cluster_refs:
  - "#90252"
  - "#90267"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90252 was planned as superseded of open canonical #90267 in run 27520790826. Re-fetch live state and only close if #90252 remains open and #90267 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-133-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #90252

## Goal

Run one live close-only cleanup pass. Hydrate #90252 and #90267, then emit at most one planned close action for #90252. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90252 fix(state-migrations): archive plugin install index on conflict instead of keeping it
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T15:56:22Z
- canonical/candidate: #90267 fix(doctor): archive conflicting plugin install index
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27520790826.json

## Instructions

If #90252 is still open and #90267 is still open, prefer `close_superseded` with `canonical: "#90267"` for #90252. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
