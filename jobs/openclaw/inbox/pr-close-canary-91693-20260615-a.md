---
repo: openclaw/openclaw
cluster_id: pr-close-canary-91693-20260615-a
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
  - "#91950"
candidates:
  - "#91693"
  - "#91950"
cluster_refs:
  - "#91693"
  - "#91950"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #91693 was planned as superseded by merged #91950 in run 27528464657. Re-fetch live state and only close if #91693 remains open and #91950 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-282 after live refetch on 2026-06-15."
---

# PR Close Canary #91693

## Goal

Run one live close-only cleanup pass. Hydrate #91693 and #91950, then emit at most one planned close action for #91693. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #91693 fix(web_fetch): strip whitespace from URLs to prevent new URL parse errors
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-11T13:52:09Z
- candidate: #91950 fix(web_fetch): sanitize URL whitespace from LLM tool call arguments
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-11T01:21:08Z
- source result: results/runs/27528464657.json

## Instructions

If #91693 is still open and #91950 is still merged, prefer a credit-preserving `close_superseded` action for #91693. Mention both PR URLs in the close comment and preserve the contributor's URL-whitespace fix as attribution/follow-up context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
