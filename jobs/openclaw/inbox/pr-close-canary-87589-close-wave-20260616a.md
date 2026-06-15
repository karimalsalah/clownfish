---
repo: openclaw/openclaw
cluster_id: pr-close-canary-87589-close-wave-20260616a
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
  - "#87590"
candidates:
  - "#87589"
  - "#87590"
cluster_refs:
  - "#87589"
  - "#87590"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #87589 was planned as superseded of open canonical #87590 in run 27516690379. Re-fetch live state and only close if #87589 remains open and #87590 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-174-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #87589

## Goal

Run one live close-only cleanup pass. Hydrate #87589 and #87590, then emit at most one planned close action for #87589. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #87589 fix(memory): show signalCount in dreaming promotion annotation (#87588)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:08:42Z
- canonical/candidate: #87590 fix(memory-core): show signalCount in promotion annotations
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27516690379.json

## Instructions

If #87589 is still open and #87590 is still open, prefer `close_superseded` with `canonical: "#87590"` for #87589. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
