---
repo: openclaw/openclaw
cluster_id: pr-close-canary-86826-close-wave-20260616a
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
  - "#83368"
candidates:
  - "#86826"
  - "#83368"
cluster_refs:
  - "#86826"
  - "#83368"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #86826 was planned as superseded of open canonical #83368 in run 27516739343. Re-fetch live state and only close if #86826 remains open and #83368 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-307-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #86826

## Goal

Run one live close-only cleanup pass. Hydrate #86826 and #83368, then emit at most one planned close action for #86826. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #86826 fix(gateway): preserve raw external session aliases
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T07:15:17Z
- canonical/candidate: #83368 fix(gateway): preserve raw external session aliases
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27516739343.json

## Instructions

If #86826 is still open and #83368 is still open, prefer `close_superseded` with `canonical: "#83368"` for #86826. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
