---
repo: "openclaw/openclaw"
cluster_id: "repair-92892-fresh-plan-20260618"
mode: execute
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
  - "#92892"
candidates:
  - "#92892"
cluster_refs:
  - "#92892"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-92892-fresh-plan-20260618"
source: repair_canary_promotion
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #92892

Re-hydrate open contributor PR #92892 from current GitHub state. Its scope is
the two-file Gemini CLI image-capability fix. Determine whether a concrete,
narrow repair remains necessary and preserve YonganZhang's credit.

## Guardrails

- Re-fetch the current PR head, checks, comments, review threads, and current
  main before planning any repair.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep any repair inside the existing two-file gateway/model-capability scope.
- If the work is security-sensitive, broad, unrelated to the reported
  capability behavior, or requires an active contributor decision, emit a
  blocked artifact with the exact reason.
- If a repair is justified, use focused existing gateway/model coverage and
  `pnpm check:changed`; do not include lifecycle commands, inline probes, or
  Codex `/review` in executor validation commands.
