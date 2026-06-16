---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92072-20260616-bulk
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
  - "#92892"
candidates:
  - "#92072"
  - "#92892"
cluster_refs:
  - "#92072"
  - "#92892"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92072 was planned as superseded of open canonical #92892 in run 27588775250. Re-fetch live state and only close if #92072 remains open and #92892 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T015330-009 after live refetch on 2026-06-16."
---

# PR Close Canary #92072

## Goal

Run one live close-only cleanup pass. Hydrate #92072 and #92892, then emit at most one planned close action for #92072. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92072 fix(gateway): treat `google-gemini-cli` Gemini models as image-capable
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T20:59:59Z
- canonical/candidate: #92892 fix(gateway): allow Gemini CLI image-capable models
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27588775250.json

## Instructions

If #92072 is still open and #92892 is still open, prefer `close_superseded` with `canonical: "#92892"` for #92072. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
