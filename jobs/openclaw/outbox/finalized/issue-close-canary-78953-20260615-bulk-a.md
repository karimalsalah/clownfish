---
repo: openclaw/openclaw
cluster_id: issue-close-canary-78953-20260615-bulk-a
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
  - "#85323"
candidates:
  - "#78953"
  - "#85323"
cluster_refs:
  - "#78953"
  - "#85323"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #78953 was planned as fixed by merged #85323 in run 27519055279. Re-fetch live state and only close if #78953 remains open and #85323 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-787-plan-wave-20260615-b after live refetch on 2026-06-15."
---

# Issue Close Canary #78953

## Goal

Run one live close-only cleanup pass. Hydrate #78953 and #85323, then emit at most one planned close action for #78953. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #78953 Docs: memorySearch embedding cache default disagrees with runtime
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T05:03:53Z
- candidate: #85323 docs: align memorySearch cache.enabled default with runtime (true)
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-22T16:58:57Z
- source result: results/runs/27519055279.json

## Instructions

If #78953 is still open and #85323 is still merged, prefer `close_fixed_by_candidate` for #78953. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
