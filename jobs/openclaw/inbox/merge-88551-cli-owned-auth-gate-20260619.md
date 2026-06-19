---
repo: "openclaw/openclaw"
cluster_id: "merge-88551-cli-owned-auth-gate-20260619"
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
canonical:
  - "#88551"
candidates:
  - "#88551"
cluster_refs:
  - "#88551"
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/merge-88551-cli-owned-auth-gate-20260619"
source: "fresh_merge_preflight"
---

# Merge: #88551 CLI-Owned Auth Gate

## Exact-Head Preconditions

- Canonical PR: #88551.
- Expected contributor head:
  `07cc2d0866e30e4e355abf1fb11d2bad24385def`.
- Fresh preflight found the PR open, mergeable, and clean against current
  `main`, with 141 successful checks, one neutral check, 33 skipped checks,
  no failed or pending checks, and no unresolved review threads.

## Required Action

- Re-fetch the PR, its head SHA, current base SHA, checks, review threads,
  review-bot feedback, and mergeability immediately before mutating.
- Merge only if the PR remains at the expected head, remains mergeable and
  clean, all required checks remain complete without failures, no unresolved
  review threads exist, security remains cleared, and the fresh merge
  preflight passes.
- Squash merge the contributor PR, preserving @yu-xin-c attribution.
- If any precondition changed, emit `needs_human` or a blocked result without
  merge, comment, label, close, force-push, or bypass.
