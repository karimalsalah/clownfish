---
repo: openclaw/openclaw
cluster_id: issue-close-canary-87651-20260615-bulk-a
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
  - "#87639"
candidates:
  - "#87651"
  - "#87639"
cluster_refs:
  - "#87651"
  - "#87639"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #87651 was planned as fixed by merged #87639 in run 27520780497. Re-fetch live state and only close if #87651 remains open and #87639 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-107-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# Issue Close Canary #87651

## Goal

Run one live close-only cleanup pass. Hydrate #87651 and #87639, then emit at most one planned close action for #87651. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #87651 Long-running tool results can poison persisted session context
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T04:45:13Z
- candidate: #87639 Bound aggregate persisted tool results
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-28T20:25:03Z
- source result: results/runs/27520780497.json

## Instructions

If #87651 is still open and #87639 is still merged, prefer `close_fixed_by_candidate` for #87651. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
