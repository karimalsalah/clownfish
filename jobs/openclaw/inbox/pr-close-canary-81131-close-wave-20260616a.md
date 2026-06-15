---
repo: openclaw/openclaw
cluster_id: pr-close-canary-81131-close-wave-20260616a
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
  - "#83988"
candidates:
  - "#81131"
  - "#83988"
cluster_refs:
  - "#81131"
  - "#83988"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #81131 was planned as superseded of open canonical #83988 in run 27527032070. Re-fetch live state and only close if #81131 remains open and #83988 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T0529-033 after live refetch on 2026-06-15."
---

# PR Close Canary #81131

## Goal

Run one live close-only cleanup pass. Hydrate #81131 and #83988, then emit at most one planned close action for #81131. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #81131 fix(telegram): combine voice payload with preceding streamed text
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T01:23:51Z
- canonical/candidate: #83988 fix(tts): defer text settlement for final-mode TTS to eliminate churn (#83511)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27527032070.json

## Instructions

If #81131 is still open and #83988 is still open, prefer `close_superseded` with `canonical: "#83988"` for #81131. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
