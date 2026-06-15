---
repo: openclaw/openclaw
cluster_id: pr-close-canary-72972-close-wave-20260616a
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
  - "#89687"
candidates:
  - "#72972"
  - "#89687"
cluster_refs:
  - "#72972"
  - "#89687"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #72972 was planned as superseded of open canonical #89687 in run 27527890951. Re-fetch live state and only close if #72972 remains open and #89687 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-078 after live refetch on 2026-06-15."
---

# PR Close Canary #72972

## Goal

Run one live close-only cleanup pass. Hydrate #72972 and #89687, then emit at most one planned close action for #72972. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #72972 fix(feishu): scope sequential queue by group session
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T07:47:46Z
- canonical/candidate: #89687 fix(feishu): scope queues by topic sessions
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27527890951.json

## Instructions

If #72972 is still open and #89687 is still open, prefer `close_superseded` with `canonical: "#89687"` for #72972. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
