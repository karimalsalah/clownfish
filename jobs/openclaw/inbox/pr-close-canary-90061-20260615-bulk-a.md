---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90061-20260615-bulk-a
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
  - "#89350"
candidates:
  - "#90061"
  - "#89350"
cluster_refs:
  - "#90061"
  - "#89350"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90061 was planned as superseded by merged #89350 in run 27528100514. Re-fetch live state and only close if #90061 remains open and #89350 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-155 after live refetch on 2026-06-15."
---

# PR Close Canary #90061

## Goal

Run one live close-only cleanup pass. Hydrate #90061 and #89350, then emit at most one planned close action for #90061. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90061 fix(agent-runtime): guard prompt cache tool names
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T03:03:42Z
- candidate: #89350 fix(agents): guard prompt cache tool names
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-08T01:36:51Z
- source result: results/runs/27528100514.json

## Instructions

If #90061 is still open and #89350 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #90061. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
