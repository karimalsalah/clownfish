---
repo: openclaw/openclaw
cluster_id: issue-close-canary-92112-20260615-a
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
  - "#76731"
candidates:
  - "#92112"
  - "#76731"
cluster_refs:
  - "#92112"
  - "#76731"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92112 was planned as fixed by merged #76731 in run 27518856097. Re-fetch live state and only close if #92112 remains open and #76731 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-486-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# Issue Close Canary #92112

## Goal

Run one live close-only cleanup pass. Hydrate #92112 and #76731, then emit at most one planned close action for #92112. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92112 collapsed sidebar and resize breaks chat composer layout
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-11T09:35:38Z
- candidate: #76731 Fix mobile Control UI chat layout
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-10T19:03:14Z
- source result: results/runs/27518856097.json

## Instructions

If #92112 is still open and #76731 is still merged, prefer a `close_fixed_by_candidate` action for #92112. Mention both URLs in the close comment and preserve the report as useful reproduction context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
