---
repo: openclaw/openclaw
cluster_id: pr-close-canary-85878-20260615-bulk-a
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
  - "#85961"
candidates:
  - "#85878"
  - "#85961"
cluster_refs:
  - "#85878"
  - "#85961"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #85878 was planned as superseded by merged #85961 in run 27526368071. Re-fetch live state and only close if #85878 remains open and #85961 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T0529-034 after live refetch on 2026-06-15."
---

# PR Close Canary #85878

## Goal

Run one live close-only cleanup pass. Hydrate #85878 and #85961, then emit at most one planned close action for #85878. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #85878 fix(telegram): retain superseded draft previews
- target live state at generation: OPEN
- target updatedAt at generation: 2026-05-29T06:23:53Z
- candidate: #85961 fix #85807: retain Telegram preview after generation race
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-03T12:58:15Z
- source result: results/runs/27526368071.json

## Instructions

If #85878 is still open and #85961 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #85878. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
