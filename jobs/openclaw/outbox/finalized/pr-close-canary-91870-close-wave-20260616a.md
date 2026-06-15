---
repo: openclaw/openclaw
cluster_id: pr-close-canary-91870-close-wave-20260616a
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
  - "#91728"
candidates:
  - "#91870"
  - "#91728"
cluster_refs:
  - "#91870"
  - "#91728"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91870 was planned as superseded of open canonical #91728 in run 27523135515. Re-fetch live state and only close if #91870 remains open and #91728 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-66-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #91870

## Goal

Run one live close-only cleanup pass. Hydrate #91870 and #91728, then emit at most one planned close action for #91870. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91870 fix(github-copilot): claude-opus-4.8 is native 1M context + thinking (not 128K)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T18:04:00Z
- canonical/candidate: #91728 fix(github-copilot): prefer live model catalog
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27523135515.json

## Instructions

If #91870 is still open and #91728 is still open, prefer `close_superseded` with `canonical: "#91728"` for #91870. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
