---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92164-close-wave-20260616a
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
  - "#92341"
candidates:
  - "#92164"
  - "#92341"
cluster_refs:
  - "#92164"
  - "#92341"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92164 was planned as superseded of open canonical #92341 in run 27518987743. Re-fetch live state and only close if #92164 remains open and #92341 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-78-plan-ramp after live refetch on 2026-06-15."
---

# PR Close Canary #92164

## Goal

Run one live close-only cleanup pass. Hydrate #92164 and #92341, then emit at most one planned close action for #92164. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92164 fix(memory-core): score CJK keyword search instead of textScore=0 with trigram FTS5
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:19:13Z
- canonical/candidate: #92341 fix(memory-core): CJK textScore=0 and empty MATCH LIKE fallback
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27518987743.json

## Instructions

If #92164 is still open and #92341 is still open, prefer `close_superseded` with `canonical: "#92341"` for #92164. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
