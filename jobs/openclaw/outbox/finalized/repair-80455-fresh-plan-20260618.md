---
repo: "openclaw/openclaw"
cluster_id: "repair-80455-fresh-plan-20260618"
mode: plan
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
canonical:
  - "#80455"
candidates:
  - "#80455"
cluster_refs:
  - "#80455"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-80455-fresh-plan-20260618"
source: fresh_repair_candidate_batch
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #80455

Re-hydrate open contributor PR #80455 from current GitHub state. Its scope is
the three-file doctor `--fix` trailer behavior. Determine whether a concrete,
narrow repair remains necessary and preserve the contributor's credit.

## Guardrails

- Re-fetch the current PR head, checks, comments, review threads, and current
  main before planning any repair.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep any repair inside the existing doctor output and focused test scope.
- If the work is security-sensitive, broad, unrelated to the reported
  no-pending-change behavior, or requires an active contributor decision, emit
  a blocked artifact with the exact reason.
- If a repair is justified, use focused existing doctor coverage and
  `pnpm check:changed`; do not include lifecycle commands, inline probes, or
  Codex `/review` in executor validation commands.
