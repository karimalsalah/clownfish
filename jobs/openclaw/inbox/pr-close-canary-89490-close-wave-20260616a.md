---
repo: openclaw/openclaw
cluster_id: pr-close-canary-89490-close-wave-20260616a
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
  - "#89419"
candidates:
  - "#89490"
  - "#89419"
cluster_refs:
  - "#89490"
  - "#89419"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #89490 was planned as superseded of open canonical #89419 in run 27542815568. Re-fetch live state and only close if #89490 remains open and #89419 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T110614-117 after live refetch on 2026-06-15."
---

# PR Close Canary #89490

## Goal

Run one live close-only cleanup pass. Hydrate #89490 and #89419, then emit at most one planned close action for #89490. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #89490 Config: preserve implicit main route bindings
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T10:07:52Z
- canonical/candidate: #89419 fix(config): allow explicit main agent bindings when agents.list is non-empty
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27542815568.json

## Instructions

If #89490 is still open and #89419 is still open, prefer `close_superseded` with `canonical: "#89419"` for #89490. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
