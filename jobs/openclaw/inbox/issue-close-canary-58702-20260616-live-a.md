---
repo: openclaw/openclaw
cluster_id: issue-close-canary-58702-20260616-live-a
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
  - "#81244"
candidates:
  - "#58702"
  - "#81244"
cluster_refs:
  - "#58702"
  - "#81244"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #58702 was planned as fixed by merged #81244 in run 27610222744. Re-fetch live state and only close if #58702 remains open and #81244 is still merged. Because #81244 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result gitcrawl-516-dedupe-cleanup-wave-3 after live refetch on 2026-06-16."
---

# Issue Close Canary #58702

## Goal

Run one live close-only cleanup pass. Hydrate #58702 and #81244, then emit at most one planned close action for #58702. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #58702 [Bug] WebChat: Message text covered by action icons after upgrade to 2026.3.31
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T10:34:49Z
- canonical/candidate: #81244 [AI-assisted] fix(ui): prevent chat actions overlapping replies
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-13T12:54:07Z
- source result: results/runs/27610222744.json

## Instructions

If #58702 is still open and #81244 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#81244"` for #58702. Do not emit `close_superseded` with closed/merged #81244 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
