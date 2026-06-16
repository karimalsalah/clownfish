---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92065-20260616-bulk
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
  - "#91947"
candidates:
  - "#92065"
  - "#91947"
cluster_refs:
  - "#92065"
  - "#91947"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92065 was planned as superseded of open canonical #91947 in run 27588776096. Re-fetch live state and only close if #92065 remains open and #91947 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T015330-034 after live refetch on 2026-06-16."
---

# PR Close Canary #92065

## Goal

Run one live close-only cleanup pass. Hydrate #92065 and #91947, then emit at most one planned close action for #92065. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92065 fix(memory): honor configured qmd search timeouts
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:15:23Z
- canonical/candidate: #91947 memory_search 工具硬编码 15s timeout 不够 qmd query 跑完，建议可配置
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27588776096.json

## Instructions

If #92065 is still open and #91947 is still open, prefer `close_superseded` with `canonical: "#91947"` for #92065. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
