---
repo: openclaw/openclaw
cluster_id: pr-close-canary-60383-20260615-bulk-a
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
  - "#72397"
candidates:
  - "#60383"
  - "#72397"
cluster_refs:
  - "#60383"
  - "#72397"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #60383 was planned as superseded by merged #72397 in run 24980255440. Re-fetch live state and only close if #60383 remains open and #72397 is still merged."
notes: "Generated from ProjectClownfish result ghcrawl-156621-autonomous-smoke after live refetch on 2026-06-15."
---

# PR Close Canary #60383

## Goal

Run one live close-only cleanup pass. Hydrate #60383 and #72397, then emit at most one planned close action for #60383. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #60383 fix(feishu): parse interactive card post-format fallback content
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T17:46:29Z
- candidate: #72397 fix(feishu): repair interactive card content extraction
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-04-26T22:26:53Z
- source result: results/runs/24980255440.json

## Instructions

If #60383 is still open and #72397 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #60383. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
