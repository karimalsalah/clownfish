---
repo: openclaw/openclaw
cluster_id: pr-close-canary-86168-close-wave-20260616a
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
  - "#88531"
candidates:
  - "#86168"
  - "#88531"
cluster_refs:
  - "#86168"
  - "#88531"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #86168 was planned as superseded of open canonical #88531 in run 27526355633. Re-fetch live state and only close if #86168 remains open and #88531 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T0529-024 after live refetch on 2026-06-15."
---

# PR Close Canary #86168

## Goal

Run one live close-only cleanup pass. Hydrate #86168 and #88531, then emit at most one planned close action for #86168. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #86168 fix(edit): show best matching region on mismatch instead of raw file head
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T03:07:16Z
- canonical/candidate: #88531 Suggest closest edit match when oldText is missing
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27526355633.json

## Instructions

If #86168 is still open and #88531 is still open, prefer `close_superseded` with `canonical: "#88531"` for #86168. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
