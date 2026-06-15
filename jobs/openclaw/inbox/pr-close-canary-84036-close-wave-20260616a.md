---
repo: openclaw/openclaw
cluster_id: pr-close-canary-84036-close-wave-20260616a
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
  - "#91345"
candidates:
  - "#84036"
  - "#91345"
cluster_refs:
  - "#84036"
  - "#91345"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #84036 was planned as superseded of open canonical #91345 in run 27520912764. Re-fetch live state and only close if #84036 remains open and #91345 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-316-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #84036

## Goal

Run one live close-only cleanup pass. Hydrate #84036 and #91345, then emit at most one planned close action for #84036. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #84036 feat(cli): suggest closest command for unknown subcommands (#83999)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T00:50:44Z
- canonical/candidate: #91345 fix: suggest close CLI commands
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27520912764.json

## Instructions

If #84036 is still open and #91345 is still open, prefer `close_superseded` with `canonical: "#91345"` for #84036. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
