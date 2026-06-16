---
repo: openclaw/openclaw
cluster_id: issue-close-canary-84821-20260616-live-a
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
  - "#86503"
candidates:
  - "#84821"
  - "#86503"
cluster_refs:
  - "#84821"
  - "#86503"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #84821 was planned as fixed by merged #86503 in run 27609385126. Re-fetch live state and only close if #84821 remains open and #86503 is still merged. Because #86503 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result gitcrawl-312-dedupe-cleanup-wave-2 after live refetch on 2026-06-16."
---

# Issue Close Canary #84821

## Goal

Run one live close-only cleanup pass. Hydrate #84821 and #86503, then emit at most one planned close action for #84821. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #84821 [Bug]: tool and agent websocket events amplify during live tool output
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T02:02:41Z
- canonical/candidate: #86503 fix(gateway): dedupe session tool fanout
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-25T13:40:08Z
- source result: results/runs/27609385126.json

## Instructions

If #84821 is still open and #86503 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#86503"` for #84821. Do not emit `close_superseded` with closed/merged #86503 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
