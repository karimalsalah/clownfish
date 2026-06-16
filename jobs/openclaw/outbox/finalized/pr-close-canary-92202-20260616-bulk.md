---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92202-20260616-bulk
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
  - "#88838"
candidates:
  - "#92202"
  - "#88838"
cluster_refs:
  - "#92202"
  - "#88838"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92202 was planned as superseded of open canonical #88838 in run 27588776029. Re-fetch live state and only close if #92202 remains open and #88838 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T015330-032 after live refetch on 2026-06-16."
---

# PR Close Canary #92202

## Goal

Run one live close-only cleanup pass. Hydrate #92202 and #88838, then emit at most one planned close action for #92202. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92202 fix(embedded-runner): recheck owned-writes before session takeover (#91236)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:21:12Z
- canonical/candidate: #88838 Track core session/transcript SQLite migration via accessor seam
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27588776029.json

## Instructions

If #92202 is still open and #88838 is still open, prefer `close_superseded` with `canonical: "#88838"` for #92202. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
