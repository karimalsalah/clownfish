---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92692-close-wave-20260616a
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
  - "#92731"
candidates:
  - "#92692"
  - "#92731"
cluster_refs:
  - "#92692"
  - "#92731"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92692 was planned as superseded of open canonical #92731 in run 27516218909. Re-fetch live state and only close if #92692 remains open and #92731 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result gitcrawl-126-plan-ramp after live refetch on 2026-06-15."
---

# PR Close Canary #92692

## Goal

Run one live close-only cleanup pass. Hydrate #92692 and #92731, then emit at most one planned close action for #92692. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92692 fix(doctor): suppress false-positive group allowlist warning for parent-only channel records (#92684)
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T19:01:43Z
- canonical/candidate: #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: results/runs/27516218909.json

## Instructions

If #92692 is still open and #92731 is still open, prefer `close_superseded` with `canonical: "#92731"` for #92692. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
