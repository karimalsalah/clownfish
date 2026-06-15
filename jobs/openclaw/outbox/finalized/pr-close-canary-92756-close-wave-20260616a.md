---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92756-close-wave-20260616a
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
  - "#92682"
candidates:
  - "#92756"
  - "#92682"
cluster_refs:
  - "#92756"
  - "#92682"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92756 was planned as superseded of open canonical #92682 in run 27523511523. Re-fetch live state and only close if #92756 remains open and #92682 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-91-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #92756

## Goal

Run one live close-only cleanup pass. Hydrate #92756 and #92682, then emit at most one planned close action for #92756. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92756 fix(read): decode GBK-encoded files on Windows via existing codepage fallback
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T19:03:45Z
- canonical/candidate: #92682 fix(read): use system encoding fallback for non-UTF-8 text files on Windows
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27523511523.json

## Instructions

If #92756 is still open and #92682 is still open, prefer `close_superseded` with `canonical: "#92682"` for #92756. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
