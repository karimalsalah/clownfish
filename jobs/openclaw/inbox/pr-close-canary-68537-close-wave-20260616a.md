---
repo: openclaw/openclaw
cluster_id: pr-close-canary-68537-close-wave-20260616a
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
  - "#91408"
candidates:
  - "#68537"
  - "#91408"
cluster_refs:
  - "#68537"
  - "#91408"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #68537 was planned as superseded of open canonical #91408 in run 27518887246. Re-fetch live state and only close if #68537 remains open and #91408 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-599-plan-wave-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #68537

## Goal

Run one live close-only cleanup pass. Hydrate #68537 and #91408, then emit at most one planned close action for #68537. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #68537 [codex] fix(telegram): allow ACP bindings for direct chats
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T18:38:25Z
- canonical/candidate: #91408 feat(channels/acp): support ACP bindings for direct-message peers
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27518887246.json

## Instructions

If #68537 is still open and #91408 is still open, prefer `close_superseded` with `canonical: "#91408"` for #68537. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
