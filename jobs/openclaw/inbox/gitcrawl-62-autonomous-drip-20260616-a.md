---
repo: openclaw/openclaw
cluster_id: gitcrawl-62-autonomous-drip-20260616-a
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
canonical:
  - "#75923"
candidates:
  - "#75923"
  - "#91918"
cluster_refs:
  - "#72555"
  - "#75923"
  - "#76201"
  - "#91918"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#13364"
  - "#53329"
  - "#85914"
  - "#92016"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #75923 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 62 on 2026-06-15. Existing-overlap refs #13364, #53329, #85914, #92016 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 62

Generated from local gitcrawl run cluster 62 for `openclaw/openclaw`.

Display title:

> [Feature]: Add run-scoped cross-tool consecutive error cascade detection

Cluster shape from gitcrawl:

- total members: 8
- issues: 6
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #13364, #53329, #85914, #92016
- representative: #75923, currently open in local store
- latest member update: 2026-06-15T19:04:12.736701Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #72555 feat: Tool error circuit breaker & edit safety pre-validation
- #76201 [Bug]: Plugin `before_tool_call` hook does not fire for native exec on 2026.4.29 (Anthropic harness)

Open candidates:

- #75923 [Feature]: Add run-scoped cross-tool consecutive error cascade detection
- #91918 2026.6.5: before_tool_call/after_tool_call hooks of local extensions register but never fire (regression from 2026.5.27)

Existing-overlap context refs:

- #13364 [Feature]: Expose before_tool_call/after_tool_call in internal hooks system
- #53329 [security-signal]  fix: block empty exec commands + consecutive tool-error circuit breaker (plus minor UI test stability)
- #85914 Feature request: make tool-call failure recovery a native OpenClaw run-loop capability
- #92016 [security-signal] fix(plugins): compose live hook registry view for tool-call hooks
