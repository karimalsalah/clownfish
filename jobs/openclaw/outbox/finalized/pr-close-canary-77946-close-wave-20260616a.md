---
repo: openclaw/openclaw
cluster_id: pr-close-canary-77946-close-wave-20260616a
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
  - "#88497"
candidates:
  - "#77946"
  - "#88497"
cluster_refs:
  - "#77946"
  - "#88497"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #77946 was planned as superseded of open canonical #88497 in run 27526570569. Re-fetch live state and only close if #77946 remains open and #88497 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T054135-009 after live refetch on 2026-06-15."
---

# PR Close Canary #77946

## Goal

Run one live close-only cleanup pass. Hydrate #77946 and #88497, then emit at most one planned close action for #77946. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #77946 fix: channels with only {enabled: true} config are skipped at startup
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T22:24:11Z
- canonical/candidate: #88497 fix(gateway): load auto-enabled channel plugins at startup
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27526570569.json

## Instructions

If #77946 is still open and #88497 is still open, prefer `close_superseded` with `canonical: "#88497"` for #77946. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
