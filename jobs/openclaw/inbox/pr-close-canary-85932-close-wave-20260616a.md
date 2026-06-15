---
repo: openclaw/openclaw
cluster_id: pr-close-canary-85932-close-wave-20260616a
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
  - "#86285"
candidates:
  - "#85932"
  - "#86285"
cluster_refs:
  - "#85932"
  - "#86285"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #85932 was planned as superseded of open canonical #86285 in run 27516217195. Re-fetch live state and only close if #85932 remains open and #86285 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-120-plan-ramp after live refetch on 2026-06-15."
---

# PR Close Canary #85932

## Goal

Run one live close-only cleanup pass. Hydrate #85932 and #86285, then emit at most one planned close action for #85932. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #85932 fix(voice-call): suppress duplicate OpenAI initial greeting (#85846)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T02:59:20Z
- canonical/candidate: #86285 fix(voice-call): avoid OpenAI realtime double greeting
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27516217195.json

## Instructions

If #85932 is still open and #86285 is still open, prefer `close_superseded` with `canonical: "#86285"` for #85932. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
