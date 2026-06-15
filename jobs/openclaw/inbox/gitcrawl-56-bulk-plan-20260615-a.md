---
repo: openclaw/openclaw
cluster_id: gitcrawl-56-bulk-plan-20260615-a
mode: plan
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
  - "#89683"
candidates:
  - "#81630"
  - "#83494"
  - "#83497"
  - "#83527"
  - "#89668"
  - "#89683"
  - "#89781"
  - "#89975"
  - "#90122"
cluster_refs:
  - "#81630"
  - "#83494"
  - "#83497"
  - "#83527"
  - "#89668"
  - "#89683"
  - "#89781"
  - "#89975"
  - "#90122"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83497"
canonical_hint: "gitcrawl representative #89683 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 56 on 2026-06-15. Security-signal refs #83497 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 56

Generated from local gitcrawl run cluster 56 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI chat surfaces failed internal tool calls as visible red error banners

Cluster shape from gitcrawl:

- total members: 9
- issues: 5
- pull requests: 4
- open candidates in local store: 9
- security-signal refs requiring route_security: #83497
- representative: #89683, currently open in local store
- latest member update: 2026-06-14T04:46:07.389134Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81630 [UX] WebChat: streaming bubble grows during tool calls then shrinks on completion — jarring reflow
- #83494 Control UI renders message(action=send) visible replies only as toolCall/toolResult blocks
- #83497 [security-signal] fix(control-ui): project message tool sends as chat bubbles
- #83527 fix(ui): project message(action=send) turns as readable assistant bubbles in Control UI
- #89668 [Bug]: WebChat can leak internal browser tool commentary/debug text into user-visible replies
- #89683 [Bug]: Control UI chat surfaces failed internal tool calls as visible red error banners
- #89781 [Bug]: WebChat keeps a visible 'Tool output' block after the assistant reply is complete
- #89975 fix(reply): suppress direct tool-error progress leaks
- #90122 fix(ui): collapse non-terminal internal tool errors
