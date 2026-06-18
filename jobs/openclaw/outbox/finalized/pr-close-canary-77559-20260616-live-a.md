---
repo: openclaw/openclaw
cluster_id: pr-close-canary-77559-20260616-live-a
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
  - "#77502"
candidates:
  - "#77559"
  - "#77502"
cluster_refs:
  - "#77559"
  - "#77502"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #77559 was planned as fixed by merged #77502 in run 27608149163. Re-fetch live state and only close if #77559 remains open and #77502 is still merged. Because #77502 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result gitcrawl-73-dedupe-cleanup-wave after live refetch on 2026-06-16."
---

# PR Close Canary #77559

## Goal

Run one live close-only cleanup pass. Hydrate #77559 and #77502, then emit at most one planned close action for #77559. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #77559 [codex] Fix missing channel plugin diagnostics
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T23:04:30Z
- canonical/candidate: #77502 fix(plugins): emit actionable install hint for externalized channel plugins (#77483)
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-04T22:22:16Z
- source result: results/runs/27608149163.json

## Instructions

If #77559 is still open and #77502 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#77502"` for #77559. Do not emit `close_superseded` with closed/merged #77502 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
