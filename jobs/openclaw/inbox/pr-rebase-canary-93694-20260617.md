---
repo: openclaw/openclaw
cluster_id: pr-rebase-canary-93694-20260617
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
  - close
  - merge
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unresolved_review_threads
maintainer_calibration:
  - "Rebase the current maintainer-editable contributor branch onto current main, validate it, and run Codex /review. Do not broaden the PR."
canonical:
  - "#93694"
candidates:
  - "#93694"
cluster_refs:
  - "#93694"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
rebase_only: true
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#93694 is the sole canonical PR. Rebase and validate the existing maintainer-editable branch before any separate merge finalization."
notes: "Bounded rebase-only canary. Repair the contributor branch only; do not merge, close, label, create a replacement PR, or search beyond this PR."
---

# Rebase-only repair canary: #93694

## Goal

Re-hydrate #93694. Because its base must match current main before finalization,
emit a planned `fix_needed` and `build_fix_artifact` for
`repair_contributor_branch` when a rebase is required.

The executor may rebase the existing maintainer-editable contributor branch,
run changed-surface validation and Codex `/review`, then push that rebased
branch. It must not manufacture unrelated source edits just to make progress.

Do not merge, close, label, create a replacement PR, or search beyond this PR.
