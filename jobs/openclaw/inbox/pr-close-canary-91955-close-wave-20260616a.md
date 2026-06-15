---
repo: openclaw/openclaw
cluster_id: pr-close-canary-91955-close-wave-20260616a
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
  - "#91988"
candidates:
  - "#91955"
  - "#91988"
cluster_refs:
  - "#91955"
  - "#91988"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91955 was planned as superseded of open canonical #91988 in run 1781512257211762. Re-fetch live state and only close if #91955 remains open and #91988 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-324 after live refetch on 2026-06-15."
---

# PR Close Canary #91955

## Goal

Run one live close-only cleanup pass. Hydrate #91955 and #91988, then emit at most one planned close action for #91955. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91955 fix(agents): keep BOOTSTRAP.md pending on preseeded managed workspaces [AI-assisted]
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:47:30Z
- canonical/candidate: #91988 fix: preserve BOOTSTRAP.md in preseeded workspaces (#91931)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/1781512257211762.json

## Instructions

If #91955 is still open and #91988 is still open, prefer `close_superseded` with `canonical: "#91988"` for #91955. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
