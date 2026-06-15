---
repo: openclaw/openclaw
cluster_id: gitcrawl-65-autonomous-drip-20260616-a
mode: autonomous
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
canonical: []
candidates:
  - "#55686"
  - "#85088"
cluster_refs:
  - "#55686"
  - "#85088"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42754"
  - "#42908"
  - "#43202"
  - "#43953"
  - "#85159"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42754 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 65 on 2026-06-15. Existing-overlap refs #42754, #42908, #43202, #43953, #85159 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 65

Generated from local gitcrawl run cluster 65 for `openclaw/openclaw`.

Display title:

> [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value

Cluster shape from gitcrawl:

- total members: 7
- issues: 4
- pull requests: 3
- open candidates in local store: 2
- excluded existing-overlap refs: #42754, #42908, #43202, #43953, #85159
- representative: #42754, currently open in local store
- latest member update: 2026-06-15T19:04:12.776007Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55686 [Feature Request] Make command options clickable buttons in Feishu (e.g., /reasoning)
- #85088 Missing argsMenu for /verbose and /reasoning commands (no inline buttons)

Existing-overlap context refs:

- #42754 [Feature]: Feishu card action handler discards action.option, action.options, and action.form_value
- #42908 feat(feishu): extract option, options, form_value from card action callbacks
- #43202 Feishu card action: pass through form_value, input_value and other fields
- #43953 [security-signal] feat(feishu): pass through form_value, input_value, option(s) from card actions
- #85159 fix(commands): show current level in /verbose and /reasoning menus
