---
repo: openclaw/openclaw
cluster_id: pr-close-canary-65409-20260615-bulk-a
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
  - "#83828"
candidates:
  - "#65409"
  - "#83828"
cluster_refs:
  - "#65409"
  - "#83828"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #65409 was planned as superseded by merged #83828 in run 27518829649. Re-fetch live state and only close if #65409 remains open and #83828 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-411-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #65409

## Goal

Run one live close-only cleanup pass. Hydrate #65409 and #83828, then emit at most one planned close action for #65409. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #65409 Populate codex-cli tool entries in system prompt report
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T12:08:23Z
- candidate: #83828 fix(cli): include loopback tools in cli prompts
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-19T01:30:07Z
- source result: results/runs/27518829649.json

## Instructions

If #65409 is still open and #83828 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #65409. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
