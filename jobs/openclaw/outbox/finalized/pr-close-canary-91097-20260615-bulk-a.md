---
repo: openclaw/openclaw
cluster_id: pr-close-canary-91097-20260615-bulk-a
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
  - "#91098"
candidates:
  - "#91097"
  - "#91098"
cluster_refs:
  - "#91097"
  - "#91098"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91097 was planned as superseded by merged #91098 in run 27528267750. Re-fetch live state and only close if #91097 remains open and #91098 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-212 after live refetch on 2026-06-15."
---

# PR Close Canary #91097

## Goal

Run one live close-only cleanup pass. Hydrate #91097 and #91098, then emit at most one planned close action for #91097. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91097 fix(test): add missing reasoning field to overflow compaction harness mock defaults
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T06:10:43Z
- candidate: #91098 fix(test): type overflow resolver mock
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-07T06:40:38Z
- source result: results/runs/27528267750.json

## Instructions

If #91097 is still open and #91098 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #91097. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
