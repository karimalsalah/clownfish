---
repo: openclaw/openclaw
cluster_id: pr-close-canary-80590-20260615-bulk-a
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
  - "#83667"
candidates:
  - "#80590"
  - "#83667"
cluster_refs:
  - "#80590"
  - "#83667"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #80590 was planned as superseded by merged #83667 in run 27520795074. Re-fetch live state and only close if #80590 remains open and #83667 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-14-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #80590

## Goal

Run one live close-only cleanup pass. Hydrate #80590 and #83667, then emit at most one planned close action for #80590. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #80590 fix(codex): expose sandbox shell tools
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T00:19:11Z
- candidate: #83667 fix(codex): expose sandbox shell tools for ssh backends
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-19T00:15:54Z
- source result: results/runs/27520795074.json

## Instructions

If #80590 is still open and #83667 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #80590. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
