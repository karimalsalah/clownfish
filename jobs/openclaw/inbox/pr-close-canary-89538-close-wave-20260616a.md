---
repo: openclaw/openclaw
cluster_id: pr-close-canary-89538-close-wave-20260616a
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
  - "#90503"
candidates:
  - "#89538"
  - "#90503"
cluster_refs:
  - "#89538"
  - "#90503"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #89538 was planned as superseded of open canonical #90503 in run 27518788678. Re-fetch live state and only close if #89538 remains open and #90503 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-267-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #89538

## Goal

Run one live close-only cleanup pass. Hydrate #89538 and #90503, then emit at most one planned close action for #89538. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #89538 fix(sessions): sweep orphaned atomic-write temp files at gateway startup
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T10:10:21Z
- canonical/candidate: #90503 fix(sessions): sweep orphan store temp files
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27518788678.json

## Instructions

If #89538 is still open and #90503 is still open, prefer `close_superseded` with `canonical: "#90503"` for #89538. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
