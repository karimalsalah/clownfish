---
repo: openclaw/openclaw
cluster_id: pr-close-canary-86551-20260616-bulk
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
  - "#87593"
candidates:
  - "#86551"
  - "#87593"
cluster_refs:
  - "#86551"
  - "#87593"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #86551 was planned as fixed by merged #87593 in run 27588775552. Re-fetch live state and only close if #86551 remains open and #87593 is still merged. Because #87593 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T015330-028 after live refetch on 2026-06-16."
---

# PR Close Canary #86551

## Goal

Run one live close-only cleanup pass. Hydrate #86551 and #87593, then emit at most one planned close action for #86551. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #86551 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:46:48Z
- canonical/candidate: #87593 fix(agents): preserve reasoning_content replay across DeepSeek tier suffixes
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-28T15:25:55Z
- source result: results/runs/27588775552.json

## Instructions

If #86551 is still open and #87593 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#87593"` for #86551. Do not emit `close_superseded` with closed/merged #87593 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
