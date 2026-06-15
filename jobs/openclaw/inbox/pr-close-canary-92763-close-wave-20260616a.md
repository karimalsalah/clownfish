---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92763-close-wave-20260616a
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
  - "#92526"
candidates:
  - "#92763"
  - "#92526"
cluster_refs:
  - "#92763"
  - "#92526"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92763 was planned as superseded of open canonical #92526 in run 27520796133. Re-fetch live state and only close if #92763 remains open and #92526 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-142-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #92763

## Goal

Run one live close-only cleanup pass. Hydrate #92763 and #92526, then emit at most one planned close action for #92763. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92763 fix(gateway): add google-gemini-cli image capability fallback for stale catalog rows
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T18:50:14Z
- canonical/candidate: #92526 fix(gateway): treat google-gemini-cli Gemini models as image-capable (fixes #91739)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27520796133.json

## Instructions

If #92763 is still open and #92526 is still open, prefer `close_superseded` with `canonical: "#92526"` for #92763. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
