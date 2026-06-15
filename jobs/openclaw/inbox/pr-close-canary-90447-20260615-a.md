---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90447-20260615-a
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
  - "#90816"
candidates:
  - "#90447"
  - "#90816"
cluster_refs:
  - "#90447"
  - "#90816"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90447 was planned as superseded by merged #90816 in run 27521481701. Re-fetch live state and only close if #90447 remains open and #90816 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-54-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #90447

## Goal

Run one live close-only cleanup pass. Hydrate #90447 and #90816, then emit at most one planned close action for #90447. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90447 fix(memory-core): resolve adapter default model for index identity state
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-04T19:35:24Z
- candidate: #90816 fix(memory): resolve adapter default model in plain status identity check
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-06T02:34:30Z
- source result: results/runs/27521481701.json

## Instructions

If #90447 is still open and #90816 is still merged, prefer a credit-preserving `close_superseded` action for #90447. Mention both PR URLs in the close comment and preserve the contributor's memory-core identity fix as attribution/follow-up context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
