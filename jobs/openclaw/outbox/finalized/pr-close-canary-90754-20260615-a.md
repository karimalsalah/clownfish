---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90754-20260615-a
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
  - "#92779"
candidates:
  - "#90754"
  - "#92779"
cluster_refs:
  - "#90754"
  - "#92779"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90754 was planned as superseded by merged #92779 in run 27520806295. Re-fetch live state and only close if #90754 remains open and #92779 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-146-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #90754

## Goal

Run one live close-only cleanup pass. Hydrate #90754 and #92779, then emit at most one planned close action for #90754. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90754 feat(control-ui): add toggle to collapse or expand workspace files panel
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-07T16:44:19Z
- candidate: #92779 fix: start workspace files collapsed
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-13T19:19:35Z
- source result: results/runs/27520806295.json

## Instructions

If #90754 is still open and #92779 is still merged, prefer a credit-preserving `close_superseded` action for #90754. Mention both PR URLs in the close comment and preserve the contributor's workspace-panel UI request as attribution/follow-up context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
