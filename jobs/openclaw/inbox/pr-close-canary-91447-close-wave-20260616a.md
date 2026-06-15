---
repo: openclaw/openclaw
cluster_id: pr-close-canary-91447-close-wave-20260616a
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
  - "#91533"
candidates:
  - "#91447"
  - "#91533"
cluster_refs:
  - "#91447"
  - "#91533"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91447 was planned as superseded of open canonical #91533 in run 27516213902. Re-fetch live state and only close if #91447 remains open and #91533 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-112-plan-ramp after live refetch on 2026-06-15."
---

# PR Close Canary #91447

## Goal

Run one live close-only cleanup pass. Hydrate #91447 and #91533, then emit at most one planned close action for #91447. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91447 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T14:53:19Z
- canonical/candidate: #91533 fix(ui): scope avatar storage per agent ID
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27516213902.json

## Instructions

If #91447 is still open and #91533 is still open, prefer `close_superseded` with `canonical: "#91533"` for #91447. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
