---
repo: openclaw/openclaw
cluster_id: issue-close-canary-91036-20260615-a
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
  - "#91036"
  - "#92779"
cluster_refs:
  - "#91036"
  - "#92779"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91036 was planned as fixed by merged #92779 in run 27520806295. Re-fetch live state and only close if #91036 remains open and #92779 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-146-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# Issue Close Canary #91036

## Goal

Run one live close-only cleanup pass. Hydrate #91036 and #92779, then emit at most one planned close action for #91036. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91036 workspace files panel collapse request
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-07T00:06:28Z
- candidate: #92779 fix: start workspace files collapsed
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-13T19:19:35Z
- source result: results/runs/27520806295.json

## Instructions

If #91036 is still open and #92779 is still merged, prefer a `close_fixed_by_candidate` action for #91036. Mention both URLs in the close comment and preserve the user request as context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
