---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92704-close-wave-20260616a
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
  - "#92770"
candidates:
  - "#92704"
  - "#92770"
cluster_refs:
  - "#92704"
  - "#92770"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92704 was planned as superseded of open canonical #92770 in run 27520786704. Re-fetch live state and only close if #92704 remains open and #92770 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-125-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #92704

## Goal

Run one live close-only cleanup pass. Hydrate #92704 and #92770, then emit at most one planned close action for #92704. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92704 #92688: fix(qwen): use DashScope native image format for Qwen vision models
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T19:02:16Z
- canonical/candidate: #92770 fix(media-understanding): place Qwen/DashScope image prompts in user content (#92688)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27520786704.json

## Instructions

If #92704 is still open and #92770 is still open, prefer `close_superseded` with `canonical: "#92770"` for #92704. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
